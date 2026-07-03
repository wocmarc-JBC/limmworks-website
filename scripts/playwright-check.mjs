import { chromium } from "@playwright/test";
import fs from "node:fs/promises";
import path from "node:path";

const baseURL = (process.argv[2] || process.env.BASE_URL || "http://127.0.0.1:3000").replace(
  /\/$/,
  "",
);

const routes = [
  "/",
  "/landed-renovation",
  "/landed-aa-works",
  "/condo-renovation",
  "/hdb-renovation",
  "/commercial-renovation",
  "/kitchen-renovation",
  "/bathroom-renovation",
  "/carpentry-storage",
  "/gallery",
  "/owners-notes",
  "/about",
  "/contact",
];

const viewports = [
  { name: "desktop", width: 1440, height: 1100 },
  { name: "mobile", width: 390, height: 900 },
];

const screenshotDir = path.resolve(
  process.env.SCREENSHOT_DIR || path.join("qa", "screenshots"),
);
await fs.mkdir(screenshotDir, { recursive: true });

const browser = await chromium.launch();
const failures = [];
const summaries = [];
const forbiddenBrandPattern = new RegExp(`\\b${["J", "B", "C"].join("")}\\b`, "i");
const forbiddenPublicPatterns = [
  { label: "public bracket placeholder", pattern: /\[INSERT/i },
  { label: "public preview wording", pattern: /\bpreview\b/i },
  { label: "public draft wording", pattern: /\bdrafts?\b/i },
  { label: "public Marcus wording", pattern: /\bMarch?us\b/i },
  { label: "public Wix wording", pattern: /\bWix\b/i },
  { label: "public placeholder wording", pattern: /\bplaceholder\b/i },
  { label: "public internal wording", pattern: /\binternal\b/i },
  { label: "public unsafe-claims wording", pattern: /unsafe claims/i },
  { label: "public generated-visuals wording", pattern: /generated visuals/i },
  { label: "public approved-photos setup wording", pattern: /prepared for approved photos/i },
  { label: "public domain/DNS warning", pattern: /No live domain|DNS changes/i },
];

function recordFailure(message) {
  failures.push(message);
}

function screenshotName(route, viewportName) {
  const slug = route === "/" ? "home" : route.replace(/^\//, "").replace(/\//g, "-");
  return `${viewportName}-${slug}.png`;
}

async function checkRoute(route, viewport) {
  const page = await browser.newPage({
    viewport: { width: viewport.width, height: viewport.height },
  });
  const consoleErrors = [];

  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(message.text());
    }
  });
  page.on("pageerror", (error) => {
    consoleErrors.push(error.message);
  });

  const response = await page.goto(`${baseURL}${route}`, {
    waitUntil: "networkidle",
    timeout: 30000,
  });

  if (!response || response.status() >= 400) {
    recordFailure(`${viewport.name} ${route}: HTTP ${response?.status() ?? "no response"}`);
  }

  await page.evaluate(async () => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const step = Math.max(window.innerHeight * 0.45, 240);

    for (let y = 0; y <= document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await delay(180);
    }

    window.scrollTo(0, 0);
    await delay(600);
  });
  await page.waitForLoadState("networkidle", { timeout: 10000 }).catch(() => {});
  await page
    .waitForFunction(
      () =>
        Array.from(document.images).every(
          (image) => image.complete && image.naturalWidth > 0 && image.naturalHeight > 0,
        ),
      { timeout: 12000 },
    )
    .catch(() => {});

  const checks = await page.evaluate(() => {
    const images = Array.from(document.images).map((image) => ({
      src: image.currentSrc || image.src,
      complete: image.complete,
      width: image.naturalWidth,
      height: image.naturalHeight,
    }));

    const schemaScripts = Array.from(
      document.querySelectorAll('script[type="application/ld+json"]'),
    ).map((script) => script.textContent || "");

    const sections = Array.from(document.querySelectorAll("section")).map((section, index) => {
      const rect = section.getBoundingClientRect();
      return {
        index,
        height: Math.round(rect.height),
        textLength: (section.textContent || "").trim().length,
        images: section.querySelectorAll("img").length,
      };
    });

    const fixedWhatsapp = Array.from(document.querySelectorAll("a"))
      .filter((link) => (link.textContent || "").includes("WhatsApp"))
      .map((link) => {
        let node = link;

        while (node && node !== document.body) {
          const style = window.getComputedStyle(node);

          if (style.position === "fixed") {
            const rect = node.getBoundingClientRect();

            return {
              top: Math.round(rect.top),
              bottom: Math.round(rect.bottom),
              height: Math.round(rect.height),
              width: Math.round(rect.width),
            };
          }

          node = node.parentElement;
        }

        return null;
      })
      .filter(Boolean);

    return {
      textLength: (document.body.textContent || "").trim().length,
      scrollWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth,
      bodyPaddingBottom: Number.parseFloat(window.getComputedStyle(document.body).paddingBottom),
      images,
      schemaScripts,
      sections,
      html: document.documentElement.innerHTML,
      bodyText: document.body.innerText || "",
      fixedWhatsapp,
    };
  });

  const brokenImages = checks.images.filter(
    (image) => !image.complete || image.width === 0 || image.height === 0,
  );
  if (brokenImages.length > 0) {
    recordFailure(
      `${viewport.name} ${route}: broken images ${brokenImages
        .map((image) => image.src)
        .join(", ")}`,
    );
  }

  if (checks.textLength < 350) {
    recordFailure(`${viewport.name} ${route}: page text looks too sparse`);
  }

  if (checks.scrollWidth > checks.innerWidth + 2) {
    recordFailure(
      `${viewport.name} ${route}: horizontal overflow ${checks.scrollWidth}px > ${checks.innerWidth}px`,
    );
  }

  const blankSections = checks.sections.filter(
    (section) => section.height > 900 && section.textLength < 40 && section.images === 0,
  );
  if (blankSections.length > 0) {
    recordFailure(
      `${viewport.name} ${route}: possible blank sections ${blankSections
        .map((section) => section.index)
        .join(", ")}`,
    );
  }

  if (!checks.html.includes("WhatsApp")) {
    recordFailure(`${viewport.name} ${route}: WhatsApp CTA text missing`);
  }

  if (forbiddenBrandPattern.test(checks.html)) {
    recordFailure(`${viewport.name} ${route}: accidental forbidden brand reference found`);
  }

  for (const { label, pattern } of forbiddenPublicPatterns) {
    if (pattern.test(checks.bodyText)) {
      recordFailure(`${viewport.name} ${route}: ${label} found`);
    }
  }

  if (viewport.name === "mobile") {
    const mobileWhatsapp = checks.fixedWhatsapp.find(
      (item) => item.width > checks.innerWidth * 0.8 && item.bottom >= 850,
    );

    if (!mobileWhatsapp) {
      recordFailure(`${viewport.name} ${route}: mobile WhatsApp sticky bar missing`);
    } else if (checks.bodyPaddingBottom < mobileWhatsapp.height + 12) {
      recordFailure(
        `${viewport.name} ${route}: mobile WhatsApp spacing too small (${checks.bodyPaddingBottom}px)`,
      );
    }
  }

  if (checks.schemaScripts.length === 0) {
    recordFailure(`${viewport.name} ${route}: missing JSON-LD schema`);
  } else {
    for (const script of checks.schemaScripts) {
      try {
        JSON.parse(script);
      } catch (error) {
        recordFailure(`${viewport.name} ${route}: invalid JSON-LD ${error.message}`);
      }
    }
  }

  if (consoleErrors.length > 0) {
    recordFailure(`${viewport.name} ${route}: console errors ${consoleErrors.join(" | ")}`);
  }

  const screenshotPath = path.join(screenshotDir, screenshotName(route, viewport.name));
  await page.screenshot({ path: screenshotPath, fullPage: true });
  await page.close();

  summaries.push({
    route,
    viewport: viewport.name,
    screenshot: screenshotPath,
    images: checks.images.length,
    schemaScripts: checks.schemaScripts.length,
  });
}

async function checkStaticFiles() {
  for (const route of ["/sitemap.xml", "/robots.txt"]) {
    const response = await fetch(`${baseURL}${route}`);
    const text = await response.text();

    if (!response.ok) {
      recordFailure(`${route}: HTTP ${response.status}`);
    }

    if (route === "/sitemap.xml" && !text.includes("<urlset")) {
      recordFailure("/sitemap.xml: missing urlset");
    }

    if (route === "/robots.txt" && !text.includes("User-Agent")) {
      recordFailure("/robots.txt: missing User-Agent");
    }
  }
}

async function checkContactForm() {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
  await page.goto(`${baseURL}/contact`, { waitUntil: "networkidle" });
  await page.locator('form#project-review [name="name"]').fill("LIMM Reviewer");
  await page.locator('form#project-review [name="contactNumber"]').fill("+65 9123 4567");
  await page.locator('form#project-review [name="propertyType"]').selectOption({ label: "Landed" });
  await page
    .locator('form#project-review [name="renovationType"]')
    .selectOption({ label: "Landed Renovation" });
  await page.locator('form#project-review [name="address"]').fill("Bukit Timah");
  await page
    .locator('form#project-review [name="budget"]')
    .selectOption({ label: "$200K-$400K" });
  await page.locator('form#project-review [name="timeline"]').fill("Q4 2026");
  await page
    .locator('form#project-review [name="scope"]')
    .fill("Layout review, kitchen upgrade, bathroom works and practical storage.");
  await page.locator('form#project-review button[type="submit"]').click();
  const generated = await page.getByLabel("Generated Enquiry Text").inputValue();

  for (const expected of ["LIMM Reviewer", "Bukit Timah", "$200K-$400K", "floor plan"]) {
    if (!generated.includes(expected)) {
      recordFailure(`/contact form: generated text missing ${expected}`);
    }
  }

  await page.screenshot({
    path: path.join(screenshotDir, "desktop-contact-form-filled.png"),
    fullPage: true,
  });
  await page.close();
}

async function checkMobileMenu() {
  const page = await browser.newPage({ viewport: { width: 390, height: 900 } });
  const consoleErrors = [];

  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(message.text());
    }
  });
  page.on("pageerror", (error) => {
    consoleErrors.push(error.message);
  });

  await page.goto(`${baseURL}/`, { waitUntil: "networkidle" });
  await page.getByLabel("Open menu").click();
  await page.getByRole("link", { name: "Home", exact: true }).waitFor({ state: "visible" });
  await page.locator("header").locator("p", { hasText: /^Services$/ }).first().waitFor({
    state: "visible",
  });
  await page
    .locator("header")
    .getByRole("link", { name: "Landed Renovation", exact: true })
    .waitFor({ state: "visible" });
  await page
    .locator("header")
    .getByRole("link", { name: "WhatsApp LIMM Works", exact: true })
    .waitFor({
      state: "visible",
    });
  await page.screenshot({
    path: path.join(screenshotDir, "mobile-menu-open.png"),
    fullPage: true,
  });

  if (consoleErrors.length > 0) {
    recordFailure(`/ mobile menu: console errors ${consoleErrors.join(" | ")}`);
  }

  await page.close();
}

for (const viewport of viewports) {
  for (const route of routes) {
    await checkRoute(route, viewport);
  }
}

await checkStaticFiles();
await checkContactForm();
await checkMobileMenu();
await browser.close();

const result = {
  baseURL,
  screenshots: screenshotDir,
  pagesChecked: summaries.length,
  failures,
};

console.log(JSON.stringify(result, null, 2));

if (failures.length > 0) {
  process.exit(1);
}
