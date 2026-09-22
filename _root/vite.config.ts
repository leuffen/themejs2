import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
// @ts-ignore
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
import jekyllHmrManager from "@leuffen/vite-jekyll-hmr-manager";

// Baut die ThemeJS2-Quellen der Website in den statisch auslieferbaren docs/assets/dist-Ordner.
export default defineConfig({
    plugins: [
        tsconfigPaths(),
        jekyllHmrManager({ watchDir: "/var/www/html", navigateOnChange: false, debug: false }),
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
    css: { devSourcemap: true },
    esbuild: { sourcemap: true },
    build: {
        minify: true,
        cssCodeSplit: true,
        emptyOutDir: true,
        rollupOptions: {
            plugins: [visualizer({ filename: "docs/assets/dist/stats.html", open: false, gzipSize: true, brotliSize: true, template: "treemap" })],
            input: { index: path.resolve(__dirname, "docs/_src/index.ts") },
            watch: { exclude: ["**/assets/dist/**", "**/dist/**"] },
            output: {
                assetFileNames: (assetInfo) => assetInfo.name && assetInfo.name.endsWith(".css") ? "style.css" : "assets/[name]-[hash][extname]",
                entryFileNames: "[name].js",
                manualChunks(id) { if (id.includes("node_modules")) return "vendor"; },
                dir: "docs/assets/dist",
            },
        },
    },
});
