import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
// @ts-ignore
import path from "path";
import visualizer from "rollup-plugin-visualizer";
import fs from "fs-extra";

export default defineConfig(({ command }) => {
    const buildTarget = process.env.BUNDLE_ENTRY;
    const isBuild = command === "build";
    const isBundleBuild = isBuild && (buildTarget === "index" || buildTarget === "embed");

    return {
        plugins: [
            tsconfigPaths(),
            ...(isBundleBuild
                ? [
                      cssInjectedByJsPlugin({
                          relativeCSSInjection: true,
                      }),
                  ]
                : []),
            {
                name: "copy-after-build",
                closeBundle: async () => {
                    if (buildTarget !== "embed") {
                        return;
                    }

                    const sourceFile = "docs/assets/dist/embed.js";
                    if (!(await fs.pathExists(sourceFile))) {
                        return;
                    }

                    await fs.copy(sourceFile, "docs/_includes/dist/embed.js");
                    console.log("Copied build to Jekyll assets");
                },
            },
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
                "@leuffen/themejs2": path.resolve(__dirname),
            },
        },
        build: isBundleBuild
            ? {
                  minify: true,
                  cssCodeSplit: true,
                  emptyOutDir: buildTarget === "index",
                  rollupOptions: {
                      plugins:
                          buildTarget === "index"
                              ? [
                                    visualizer({
                                        filename: "docs/assets/dist/stats.html",
                                        open: true,
                                        gzipSize: true,
                                        brotliSize: true,
                                        template: "treemap",
                                    }),
                                ]
                              : [],
                      input: {
                          [buildTarget]: path.resolve(__dirname, `docs/_src/${buildTarget}.ts`),
                      },
                      watch: {
                          exclude: ["**/assets/dist/**", "**/dist/**"],
                      },
                      output: {
                          assetFileNames: "assets/[name]-[hash][extname]",
                          entryFileNames: "[name].js",
                          inlineDynamicImports: true,
                          dir: "docs/assets/dist",
                      },
                  },
              }
            : undefined,
    };
});
