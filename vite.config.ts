import { defineConfig } from "vite";
import { resolve } from "node:path";
import tsconfigPaths from "vite-tsconfig-paths";
import jekyllHmrManager from "@leuffen/vite-jekyll-hmr-manager";

export default defineConfig({
    plugins: [
        tsconfigPaths(),
 //      jekyllHmrManager({
 //          watchDir: "/var/www/html",
 //          navigateOnChange: false,
 //          debug: true,
 //      }),
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
        minify: true,
        cssCodeSplit: true,
        emptyOutDir: true,
        outDir: "docs/assets/dist",
        rollupOptions: {
            input: resolve(__dirname, "docs/_src/index.ts"),
            watch: {
                exclude: ["**/assets/dist/**", "**/dist/**"],
            },
            output: {
                assetFileNames: (assetInfo) =>
                    assetInfo.name?.endsWith(".css") ? "style.css" : "assets/[name]-[hash][extname]",
                entryFileNames: "index.js",
                inlineDynamicImports: true,
            },
        },
    },
});
