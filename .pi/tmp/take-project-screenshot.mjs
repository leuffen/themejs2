import fs from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer-core';

const args = process.argv.slice(2);
if (args.length < 3 || args[1] !== '--device') {
  console.error('Usage: node take-project-screenshot.mjs <url> --device <desktop|mobile|tablet> <output>');
  process.exit(1);
}

const url = args[0];
const device = args[2];
const outFile = args[3];

const viewports = {
  desktop: { width: 1440, height: 2200, isMobile: false, hasTouch: false, deviceScaleFactor: 1 },
  tablet: { width: 1024, height: 1366, isMobile: true, hasTouch: true, deviceScaleFactor: 2 },
  mobile: { width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 3 },
};

if (!viewports[device] || !outFile) {
  console.error('Invalid device or missing output path');
  process.exit(1);
}

fs.mkdirSync(path.dirname(outFile), { recursive: true });

const browser = await puppeteer.connect({ browserWSEndpoint: 'ws://chromium:3000' });
try {
  const page = await browser.newPage();
  await page.setViewport(viewports[device]);
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(resolve => setTimeout(resolve, 2000));
  await page.screenshot({ path: outFile, fullPage: true, type: 'png' });
  console.log(JSON.stringify({ device, url: page.url(), outFile }, null, 2));
  await page.close();
} finally {
  await browser.disconnect();
}
