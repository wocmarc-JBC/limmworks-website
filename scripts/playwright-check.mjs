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

const screenshotDir = path.resolve("qa", "screenshots");
await fs.mkdir(screenshotDir, { recursive: true });

const browser = await chromium.launch();
const failures = [];
const summaries = [];
const forbiddenBrandPattern = new RegExp(`\\b${["J", "B", "C"].join("")}\\b`, "i");

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

    return {
      textLength: (document.body.textContent || "").trim().length,
      scrollWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth,
      images,
      schemaScripts,
      sections,
      html: document.documentElement.innerHTML,
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
  await page.locator('form#project-review [name="name"]').fill("Marcus Preview");
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

  for (const expected of ["Marcus Preview", "Bukit Timah", "$200K-$400K", "floor plan"]) {
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

for (const viewport of viewports) {
  for (const route of routes) {
    await checkRoute(route, viewport);
  }
}

await checkStaticFiles();
await checkContactForm();
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
