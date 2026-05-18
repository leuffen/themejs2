import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
// @ts-ignore
import path from "path";
import visualizer from "rollup-plugin-visualizer";
import { viteStaticCopy } from 'vite-plugin-static-copy'
import fs from "fs-extra";

export default defineConfig({
    plugins: [
      tsconfigPaths(),
      {
        name: 'copy-after-build',
        closeBundle: async () => {
          await fs.copy('docs/assets/dist/embed.js', 'docs/_includes/dist/embed.js')
          console.log('Copied build to Jekyll assets')
        }
      }
    ],
    server: {
        port: 4000,
        strictPort: true,
        host: "0.0.0.0",
        proxy: {
          // alles, was Vite nicht selbst bedient, an Jekyll weiterreichen
          // /assets muss zu Jekyll gehen, da die Dateien unter docs/assets liegen
          '^(?!/@vite|/docs/_src/|/node_modules|/workspaces|.*\\.(js|css|ts|tsx|vue|svelte|scss|sass|less|map)$).*': {
            target: 'http://localhost:4999',
            changeOrigin: true,
          },
        },
        hmr: true,
    },
    root: __dirname,
    resolve: {
        alias: {
            "@leuffen/themejs2": path.resolve(__dirname),
        },
    },
    build: {
        minify: false,
        cssCodeSplit: false,
        emptyOutDir: false,
        rollupOptions: {
            plugins: [
                visualizer({
                    filename: "docs/assets/dist/stats.html",
                    open: true, // auto-open in browser
                    gzipSize: true,
                    brotliSize: true,
                    template: "treemap", // or: "sunburst", "network"
                })
            ],
            input: {
                index: path.resolve(__dirname, "docs/_src/index.ts"),
                embed: path.resolve(__dirname, "docs/_src/embed.ts"),
            },
            watch: {
                exclude: ["**/assets/dist/**", "**/dist/**"],
            },
            output: {
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name && assetInfo.name.endsWith(".css")) {
                        return "[name][extname]";
                    }
                    return "[name][extname]";
                },
                entryFileNames: "[name].js",
                dir: "docs/assets/dist",
            },
        },
    },
});
