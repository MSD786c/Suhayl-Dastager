#!/usr/bin/env node
// Capture fresh preview screenshots of the running dev server.
// Usage: `npm run preview`
// Requires: dev server on http://localhost:3000

import puppeteer from "puppeteer";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const BASE = process.env.PREVIEW_BASE || "http://localhost:3000";
const OUT_DIR = path.resolve("./docs/preview");

const pages = [
  { url: "/", name: "home-desktop", w: 1440, h: 900 },
  { url: "/", name: "home-mobile", w: 390, h: 844 },
  { url: "/", name: "home-full", w: 1440, h: 900, full: true },
  { url: "/contact", name: "contact-desktop", w: 1440, h: 900 },
  { url: "/founder", name: "founder-desktop", w: 1440, h: 900, full: true },
  { url: "/ugc", name: "ugc-desktop", w: 1440, h: 900 },
  { url: "/work", name: "work-desktop", w: 1440, h: 900 },
  { url: "/projects/voxxhire", name: "project-voxxhire", w: 1440, h: 900 },
  { url: "/resume", name: "resume-desktop", w: 1440, h: 900 },
  { url: "/about", name: "about-desktop", w: 1440, h: 900 },
];

async function scrollToBottom(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let y = 0;
      const step = 400;
      const max = document.body.scrollHeight;
      const timer = setInterval(() => {
        window.scrollBy(0, step);
        y += step;
        if (y >= max) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          setTimeout(resolve, 500);
        }
      }, 50);
    });
  });
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  for (const p of pages) {
    const page = await browser.newPage();
    await page.setViewport({ width: p.w, height: p.h, deviceScaleFactor: 1 });
    await page.goto(`${BASE}${p.url}`, {
      waitUntil: "networkidle0",
      timeout: 30000,
    });
    // Trigger all whileInView animations before capturing
    if (p.full) {
      await scrollToBottom(page);
    }
    await new Promise((r) => setTimeout(r, 800));
    const outPath = path.join(OUT_DIR, `suhayl-${p.name}.png`);
    await page.screenshot({ path: outPath, fullPage: !!p.full });
    console.log(`✓ ${p.name}`);
    await page.close();
  }

  await browser.close();
  console.log(`\nDone. Saved to ${OUT_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
