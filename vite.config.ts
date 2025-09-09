import { defineConfig } from 'vite';
import tsconfigPaths from "vite-tsconfig-paths";
// @ts-ignore
import path from 'path';

export default defineConfig({
    plugins: [tsconfigPaths()],
    build: {
        minify: false,
        cssCodeSplit: false,
        rollupOptions: {
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
