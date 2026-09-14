import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
// @ts-ignore
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
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
            // alles, was Vite nicht selbst bedient, an Jekyll weiterreichen
            // /assets muss zu Jekyll gehen, da die Dateien unter docs/assets liegen
            "^(?!/@vite|/@fs/|/@id/|/docs/_src/|/node_modules/|/workspaces/|.*\\.(?:js|css|ts|tsx|vue|svelte|scss|sass|less|map)(?:\\?.*)?$).*": {
                target: "http://localhost:4999",
                changeOrigin: false,
                autoRewrite: true,
            },
        },
        // TypeScript und Styles werden weiterhin per HMR aktualisiert.
        hmr: true,
    },
    root: __dirname,
    css: {
        devSourcemap: true,
    },
    esbuild: {
        sourcemap: true,
    },
    build: {
        minify: true,
        // Vite darf CSS und dynamische Module in eigene, cachebare Chunks auslagern.
        cssCodeSplit: true,
        emptyOutDir: true,
        rollupOptions: {
            plugins: [
                visualizer({
                    filename: "docs/assets/dist/stats.html",
                    open: true,
                    gzipSize: true,
                    brotliSize: true,
                    template: "treemap",
                }),
            ],
            input: {
                index: path.resolve(__dirname, "docs/_src/index.ts"),
            },
            watch: {
                exclude: ["**/assets/dist/**", "**/dist/**"],
            },
            output: {
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name && assetInfo.name.endsWith(".css")) {
                        return "style.css";
                    }
                    return "assets/[name]-[hash][extname]";
                },
                entryFileNames: "[name].js",
                manualChunks(id) {
                    // Drittanbieter-Code wird in einen separat cachebaren Chunk ausgelagert.
                    if (id.includes("node_modules")) return "vendor";
                },
                dir: "docs/assets/dist",
            },
        },
    },
});
