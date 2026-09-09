import { defineConfig } from "vite";
import { resolve } from "node:path";
import { nxCopyAssetsPlugin } from "@nx/vite/plugins/nx-copy-assets.plugin";

// Kopiert ausschließlich beim Library-Build alle öffentlichen Paketquellen und Metadaten nach dist.
const packageAssets = [
  { input: "src", glob: "**/*", output: "src" },
  { input: "theme", glob: "**/*", output: "theme" },
  { input: "_root", glob: "**/*", output: "_root" },
  { input: "skills", glob: "**/*", output: "skills" },
  { input: "docs", glob: "**/*", output: "docs" },
  { input: "font", glob: "**/*", output: "font" },
  { input: "functions", glob: "**/*", output: "functions" },
  "*.scss",
  "*.json",
  "*.js",
  "*.md",
];

// Baut die öffentlichen Side-Effect-Entrys als ESM, während Paketabhängigkeiten beim Consumer aufgelöst werden.
export default defineConfig({
  plugins: [nxCopyAssetsPlugin(packageAssets)],
  build: {
    // Das isolierte Verzeichnis enthält nach einem Durchlauf sowohl die Quellen als auch die gebauten Entrypoints.
    emptyOutDir: true,
    lib: {
      entry: {
        index: resolve(__dirname, "index.ts"),
        "functions/formmailer": resolve(__dirname, "functions/formmailer.ts"),
      },
      formats: ["es"],
    },
    rollupOptions: {
      external: (id) => !id.startsWith(".") && !id.startsWith("/") && !id.startsWith("\0"),
      output: {
        entryFileNames: "[name].js",
      },
    },
    outDir: "dist",
  },
});
