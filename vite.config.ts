import { defineConfig } from 'vite';
import tsconfigPaths from "vite-tsconfig-paths";
// @ts-ignore
import path from 'path';
import visualizer from "rollup-plugin-visualizer";

export default defineConfig({
    plugins: [
        tsconfigPaths(),
        {
            name: 'watch-md-reload',
            handleHotUpdate({ file, server }) {
                if (file.endsWith('.md')) {
                    server.ws.send({ type: 'full-reload' });
                }
            },
        },
    ],
    server: {
        port: 4000,
        host: '0.0.0.0',
        hmr: true,
    },
    root: __dirname,
    build: {
        minify: false,
        cssCodeSplit: false,
        rollupOptions: {
            plugins: [
                visualizer({
                    filename: "docs/assets/dist/stats.html",
                    open: true,          // auto-open in browser
                    gzipSize: true,
                    brotliSize: true,
                    template: "treemap", // or: "sunburst", "network"
                }),
            ],
            input: {
                index: path.resolve(__dirname, 'docs/_src/index.ts'),
                embed: path.resolve(__dirname, 'docs/_src/embed.ts'),
            },
            output: {

                assetFileNames: (assetInfo) => {
                    if (assetInfo.name && assetInfo.name.endsWith('.css')) {
                        return '[name][extname]';
                    }
                    return '[name][extname]';
                },
                entryFileNames: '[name].js',
                dir: 'docs/assets/dist',
            },
        },
    },
});
