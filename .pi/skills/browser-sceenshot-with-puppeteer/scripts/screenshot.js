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
      "  --html-output-filename <datei>",
      "  PUPPETEER_BROWSER_WS_ENDPOINT=ws://chromium:3000",
    ].join("\n")
  );
}

function validateArgs(args) {
  const url = args.url;
  const device = args.device;
  const outputFilename = args["output-filename"];
  const htmlOutputFilename = args["html-output-filename"];

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
    htmlOutputFilename,
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

async function createHtmlSnapshot(page) {
  return page.evaluate(() => {
    const VOID_ELEMENTS = new Set([
      "area",
      "base",
      "br",
      "col",
      "embed",
      "hr",
      "img",
      "input",
      "link",
      "meta",
      "param",
      "source",
      "track",
      "wbr",
    ]);

    const escapeText = (value) =>
      String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    const escapeAttribute = (value) =>
      escapeText(value).replace(/"/g, "&quot;");

    const serializeNode = (node) => {
      if (!node) {
        return "";
      }

      switch (node.nodeType) {
        case Node.ELEMENT_NODE: {
          const tagName = node.tagName.toLowerCase();
          const attributes = Array.from(node.attributes)
            .map((attribute) => ` ${attribute.name}="${escapeAttribute(attribute.value)}"`)
            .join("");

          let html = `<${tagName}${attributes}>`;

          if (node.shadowRoot) {
            const shadowRootMode = node.shadowRoot.mode || "open";
            const shadowContent = Array.from(node.shadowRoot.childNodes)
              .map(serializeNode)
              .join("");
            html += `<template shadowrootmode="${escapeAttribute(shadowRootMode)}">${shadowContent}</template>`;
          }

          const childNodes =
            tagName === "template"
              ? Array.from(node.content.childNodes)
              : Array.from(node.childNodes);

          html += childNodes.map(serializeNode).join("");

          if (!VOID_ELEMENTS.has(tagName)) {
            html += `</${tagName}>`;
          }

          return html;
        }
        case Node.TEXT_NODE:
          return escapeText(node.textContent || "");
        case Node.CDATA_SECTION_NODE:
          return `<![CDATA[${node.textContent || ""}]]>`;
        case Node.COMMENT_NODE:
          return `<!--${node.textContent || ""}-->`;
        case Node.DOCUMENT_FRAGMENT_NODE:
          return Array.from(node.childNodes).map(serializeNode).join("");
        default:
          return "";
      }
    };

    const doctype = document.doctype
      ? `<!DOCTYPE ${document.doctype.name}${
          document.doctype.publicId ? ` PUBLIC \"${document.doctype.publicId}\"` : ""
        }${
          !document.doctype.publicId && document.doctype.systemId
            ? " SYSTEM"
            : ""
        }${
          document.doctype.systemId ? ` \"${document.doctype.systemId}\"` : ""
        }>`
      : "";

    return `${doctype}\n${serializeNode(document.documentElement)}\n`;
  });
}

async function main() {
  const rawArgs = parseArgs(process.argv.slice(2));
  const { url, device, outputFilename, htmlOutputFilename } = validateArgs(rawArgs);
  const outputPath = resolveOutputPath(outputFilename);
  const htmlOutputPath = htmlOutputFilename
    ? resolveOutputPath(htmlOutputFilename)
    : null;
  const viewport = VIEWPORTS[device];
  const puppeteer = loadPuppeteer();

  ensureOutputDirectory(outputPath);

  if (htmlOutputPath) {
    ensureOutputDirectory(htmlOutputPath);
  }

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

    if (htmlOutputPath) {
      const htmlSnapshot = await createHtmlSnapshot(page);
      fs.writeFileSync(htmlOutputPath, htmlSnapshot, "utf8");
      console.log(`DOM inkl. Shadow DOM gespeichert: ${htmlOutputPath}`);
    }
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
