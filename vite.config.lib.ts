import { defineConfig } from "vite";
import { resolve } from "node:path";

// Baut die öffentlichen Side-Effect-Entrys als ESM, während Paketabhängigkeiten beim Consumer aufgelöst werden.
export default defineConfig({
  build: {
    // Die Paket-Entrypoints werden direkt neben den Quellen erzeugt; das Projektverzeichnis darf nie geleert werden.
    emptyOutDir: false,
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
    outDir: ".",
  },
});
