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
            name: "watch-md-reload",
            handleHotUpdate({ file, server }) {
                if (file.endsWith(".md")) {
                    server.ws.send({ type: "full-reload" });
                }
            },
        },
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
        host: "0.0.0.0",
        hmr: true,
    },
    root: __dirname,
    resolve: {
        alias: {
            "@leuffen/themejs2": path.resolve(__dirname),
        },
    },
    build: {
        minify: true,
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
