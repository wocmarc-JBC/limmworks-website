import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const siteOrigin = "https://www.limmworks.com";
const sitemapPath = resolve(root, ".next/server/app/sitemap.xml.body");
const routesManifestPath = resolve(root, ".next/routes-manifest.json");
const notFoundPath = resolve(root, ".next/server/app/_not-found.html");
const llmsPath = resolve(root, ".next/server/app/llms.txt.body");
const failures = [];

function fail(message) {
  failures.push(message);
}

function decodeHtml(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)));
}

function attribute(tag, name) {
  const match = tag.match(new RegExp(`\\b${name}=(?:"([^"]*)"|'([^']*)')`, "i"));
  return match ? decodeHtml(match[1] ?? match[2] ?? "") : null;
}

function tags(html, name) {
  return [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, "gi"))].map((match) => match[0]);
}

function title(html) {
  const match = html.match(/<title>([\s\S]*?)<\/title>/i);
  return match ? decodeHtml(match[1].trim()) : null;
}

function metaContent(html, name) {
  const tag = tags(html, "meta").find((item) => attribute(item, "name")?.toLowerCase() === name.toLowerCase());
  return tag ? attribute(tag, "content") : null;
}

function canonical(html) {
  const tag = tags(html, "link").find((item) => attribute(item, "rel")?.toLowerCase() === "canonical");
  return tag ? attribute(tag, "href") : null;
}

function htmlPath(url) {
  const pathname = new URL(url).pathname.replace(/\/$/, "");
  return resolve(root, `.next/server/app/${pathname ? pathname.slice(1) : "index"}.html`);
}

function internalPath(href) {
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return null;
  let url;
  try {
    url = new URL(href, siteOrigin);
  } catch {
    return null;
  }
  if (url.origin !== siteOrigin) return null;
  return url.pathname.replace(/\/$/, "") || "/";
}

const sitemapXml = readFileSync(sitemapPath, "utf8");
const sitemapUrls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => decodeHtml(match[1]));
const uniqueUrls = new Set(sitemapUrls);

if (sitemapUrls.length !== 36) fail(`Expected 36 canonical sitemap URLs, found ${sitemapUrls.length}`);
if (uniqueUrls.size !== sitemapUrls.length) fail("Sitemap contains duplicate URLs");

const pages = [];
const inboundLinks = new Map([...uniqueUrls].map((url) => [new URL(url).pathname.replace(/\/$/, "") || "/", 0]));

for (const url of uniqueUrls) {
  const file = htmlPath(url);
  let html;
  try {
    html = readFileSync(file, "utf8");
  } catch {
    fail(`${url}: missing prerendered HTML at ${file}`);
    continue;
  }

  const pageTitle = title(html);
  const description = metaContent(html, "description");
  const pageCanonical = canonical(html);
  const robots = tags(html, "meta")
    .filter((item) => attribute(item, "name")?.toLowerCase() === "robots")
    .map((item) => attribute(item, "content")?.toLowerCase() ?? "");
  const h1Count = (html.match(/<h1\b/gi) ?? []).length;
  const jsonLdBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)].map((match) => match[1]);

  if (!pageTitle) fail(`${url}: missing title`);
  if (!description) fail(`${url}: missing meta description`);
  if (pageCanonical !== url) fail(`${url}: canonical is ${pageCanonical ?? "missing"}`);
  if (robots.some((value) => value.includes("noindex"))) fail(`${url}: canonical page contains noindex`);
  if (h1Count !== 1) fail(`${url}: expected one H1, found ${h1Count}`);
  if (!html.includes('href="https://wa.me/')) fail(`${url}: missing WhatsApp enquiry path`);
  if (jsonLdBlocks.length === 0) fail(`${url}: missing JSON-LD`);

  for (const block of jsonLdBlocks) {
    try {
      JSON.parse(block);
    } catch (error) {
      fail(`${url}: invalid JSON-LD (${error.message})`);
    }
  }

  for (const anchor of tags(html, "a")) {
    const path = internalPath(attribute(anchor, "href"));
    if (path && inboundLinks.has(path) && path !== new URL(url).pathname.replace(/\/$/, "")) {
      inboundLinks.set(path, inboundLinks.get(path) + 1);
    }
  }

  if (html.includes("limmworks-growth.woc-marc.chatgpt.site")) fail(`${url}: contains retired external asset host`);
  pages.push({ url, pageTitle, description });
}

for (const field of ["pageTitle", "description"]) {
  const values = new Map();
  for (const page of pages) {
    const value = page[field];
    if (!value) continue;
    const existing = values.get(value);
    if (existing) fail(`${page.url}: duplicate ${field} also used by ${existing}`);
    values.set(value, page.url);
  }
}

for (const [path, count] of inboundLinks) {
  if (path !== "/" && count === 0) fail(`${siteOrigin}${path}: no inbound link from another canonical page`);
}

const notFoundHtml = readFileSync(notFoundPath, "utf8");
if (canonical(notFoundHtml)) fail("404 page must not declare a canonical URL");
if (!tags(notFoundHtml, "meta").some((item) => attribute(item, "name")?.toLowerCase() === "robots" && attribute(item, "content")?.toLowerCase().includes("noindex"))) {
  fail("404 page must contain noindex");
}
if (title(notFoundHtml) !== "Page not found | LIMM Works") fail("404 page has an unexpected title");

const homeHtml = readFileSync(htmlPath(siteOrigin), "utf8");
const homeSchemas = [...homeHtml.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)]
  .map((match) => JSON.parse(match[1]))
  .flatMap((schema) => schema["@graph"] ?? [schema]);
const organization = homeSchemas.find((schema) => schema["@id"] === `${siteOrigin}/#organization`);
if (!organization) fail("Homepage is missing the connected business entity");
if (organization?.["@type"] !== "HomeAndConstructionBusiness") fail("Homepage business entity must use HomeAndConstructionBusiness markup");
const expectedAddress = {
  streetAddress: "49 Niven Road",
  addressLocality: "Singapore",
  postalCode: "228397",
  addressCountry: "SG",
};
for (const [key, value] of Object.entries(expectedAddress)) {
  if (organization?.address?.[key] !== value) fail(`Homepage business address is missing or incorrect: ${key}`);
}
if (!homeHtml.includes("49 Niven Road, Singapore 228397")) fail("Confirmed business address is not visible on the homepage");
if (!readFileSync(llmsPath, "utf8").includes("Office: 49 Niven Road, Singapore 228397")) fail("Confirmed business address is missing from llms.txt");
if (!homeSchemas.some((schema) => schema["@id"] === `${siteOrigin}/#website`)) fail("Homepage is missing the WebSite entity");
if (!homeSchemas.some((schema) => schema["@id"] === `${siteOrigin}/#webpage`)) fail("Homepage is missing the WebPage entity");

const routesManifest = JSON.parse(readFileSync(routesManifestPath, "utf8"));
const globalHeaders = routesManifest.headers.find((route) => route.source === "/:path*")?.headers ?? [];
const headerMap = new Map(globalHeaders.map((header) => [header.key, header.value]));
const expectedHeaders = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
};
for (const [key, value] of Object.entries(expectedHeaders)) {
  if (headerMap.get(key) !== value) fail(`Missing or unexpected global response header: ${key}`);
}

const legacyRedirects = routesManifest.redirects.filter((redirect) => redirect.source.startsWith("/post/") || ["/our-designers", "/portfolio"].includes(redirect.source));
if (legacyRedirects.length !== 19) fail(`Expected 19 Search Console legacy redirects, found ${legacyRedirects.length}`);
if (legacyRedirects.some((redirect) => redirect.statusCode !== 308)) fail("A legacy redirect is not permanent (308)");

if (failures.length > 0) {
  console.error(`SEO validation failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`SEO validation passed: ${pages.length} canonical pages, ${legacyRedirects.length} legacy redirects, zero metadata/schema/orphan failures.`);
