#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const VIEWPORTS = {
  desktop: {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    isMobile: false,
    hasTouch: false,
  },
  tablet: {
    width: 1024,
    height: 1366,
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  },
  mobile: {
    width: 390,
    height: 844,
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
  },
};

function parseArgs(argv) {
  const args = {};

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];

    if (!arg.startsWith("--")) {
      continue;
    }

    const withoutPrefix = arg.slice(2);

    if (withoutPrefix.includes("=")) {
      const [key, ...rest] = withoutPrefix.split("=");
      args[key] = rest.join("=");
      continue;
    }

    const next = argv[i + 1];
    if (next && !next.startsWith("--")) {
      args[withoutPrefix] = next;
      i += 1;
    } else {
      args[withoutPrefix] = true;
    }
  }

  return args;
}

function printUsage() {
  console.error(
    [
      "Verwendung:",
      "  node screenshot.js --url <url> --device <desktop|mobile|tablet> --output-filename <datei>",
      "",
      "Optional:",
      "  PUPPETEER_BROWSER_WS_ENDPOINT=ws://chromium:3000",
    ].join("\n")
  );
}

function validateArgs(args) {
  const url = args.url;
  const device = args.device;
  const outputFilename = args["output-filename"];

  if (!url || !device || !outputFilename) {
    printUsage();
    process.exit(1);
  }

  if (!VIEWPORTS[device]) {
    console.error(`Ungültiges device: ${device}`);
    console.error("Erlaubt sind: desktop, mobile, tablet");
    process.exit(1);
  }

  try {
    new URL(url);
  } catch {
    console.error(`Ungültige URL: ${url}`);
    process.exit(1);
  }

  return {
    url,
    device,
    outputFilename,
  };
}

function ensureOutputDirectory(filePath) {
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
}

function resolveOutputPath(outputFilename) {
  return path.isAbsolute(outputFilename)
    ? outputFilename
    : path.resolve(process.cwd(), outputFilename);
}

function loadPuppeteer() {
  const moduleNames = ["puppeteer-core", "puppeteer"];

  for (const moduleName of moduleNames) {
    try {
      return require(moduleName);
    } catch {
      // try next module
    }
  }

  console.error(
    "Weder 'puppeteer-core' noch 'puppeteer' ist installiert."
  );
  process.exit(1);
}

async function connectBrowser(puppeteer) {
  const configuredEndpoint =
    process.env.PUPPETEER_BROWSER_WS_ENDPOINT || "ws://chromium:3000";

  const attempts = [];

  if (configuredEndpoint.startsWith("ws://") || configuredEndpoint.startsWith("wss://")) {
    attempts.push(() =>
      puppeteer.connect({
        browserWSEndpoint: configuredEndpoint,
        defaultViewport: null,
      })
    );

    attempts.push(() =>
      puppeteer.connect({
        browserURL: configuredEndpoint.replace(/^ws/i, "http"),
        defaultViewport: null,
      })
    );
  } else if (
    configuredEndpoint.startsWith("http://") ||
    configuredEndpoint.startsWith("https://")
  ) {
    attempts.push(() =>
      puppeteer.connect({
        browserURL: configuredEndpoint,
        defaultViewport: null,
      })
    );
  }

  let lastError = null;

  for (const attempt of attempts) {
    try {
      return await attempt();
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error("Browser-Verbindung konnte nicht hergestellt werden.");
}

async function main() {
  const rawArgs = parseArgs(process.argv.slice(2));
  const { url, device, outputFilename } = validateArgs(rawArgs);
  const outputPath = resolveOutputPath(outputFilename);
  const viewport = VIEWPORTS[device];
  const puppeteer = loadPuppeteer();

  ensureOutputDirectory(outputPath);

  let browser;
  let page;

  try {
    browser = await connectBrowser(puppeteer);
    page = await browser.newPage();

    await page.setViewport(viewport);
    await page.goto(url, {
      waitUntil: "networkidle2",
      timeout: 45000,
    });

    await page.screenshot({
      path: outputPath,
      fullPage: true,
      type: "png",
    });

    console.log(`Screenshot gespeichert: ${outputPath}`);
  } finally {
    if (page) {
      await page.close().catch(() => {});
    }

    if (browser) {
      await browser.disconnect().catch(() => {});
    }
  }
}

main().catch((error) => {
  console.error("Screenshot fehlgeschlagen.");
  console.error(error?.stack || String(error));
  process.exit(1);
});
