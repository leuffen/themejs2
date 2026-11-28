import {defineConfig} from "vite";
import {resolve} from "node:path";
import tsconfigPaths from "vite-tsconfig-paths";
import jekyllHmrManager from "@leuffen/vite-jekyll-hmr-manager";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    jekyllHmrManager({
      watchDir: "/var/www/html",
      navigateOnChange: false,
      debug: false,
    }),
  ],
  server: {
    port: 4000,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: ["localhost", ".local", "main"],
    proxy: {
      "^(?!/@vite|/@fs/|/@id/|/docs/_src/|/node_modules/|/workspaces/|.*\\.(?:js|css|ts|tsx|vue|svelte|scss|sass|less|map)(?:\\?.*)?$).*": {
        target: "http://localhost:4999",
        changeOrigin: false,
        autoRewrite: true,
      },
    },
    hmr: true,
  },
  root: __dirname,
  css: {
    devSourcemap: true,
  },
  esbuild: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@leuffen/themejs2": resolve(__dirname),
    },
  },
  build: {
    minify: false,
    cssCodeSplit: true,
    emptyOutDir: true,
    sourcemap: true,
    outDir: "docs/assets/dist",
    rollupOptions: {
      plugins: [],
      input: {
        "leuffen-tjs2": resolve(__dirname, "docs/_src/leuffen-tjs2.ts"),
      },
      watch: {exclude: ["**/assets/dist/**", "**/dist/**"]},
      output: {
        assetFileNames: (assetInfo) => assetInfo.name && assetInfo.name.endsWith(".css") ? "[name][extname]" : "assets/[name]-[hash][extname]",
        entryFileNames: "[name].js",
        manualChunks(id) {
          if (id.includes("node_modules")) return "vendor";
        },
        dir: "docs/assets/dist",
      },
    },
  },
});
