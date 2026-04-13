import { defineConfig } from 'vite';
export default defineConfig({
    server: {
        port: 4000,
        host: "0.0.0.0",
        hmr: true
    },
    resolve: {
        alias: {
            '@': '/'
        }
    },
    root: './',
    publicDir: './public/www',
    build: {
        emptyOutDir: false,
        rollupOptions: {
            input: './public/main.ts'
        }
    },
    test: {
        globals: true,
        inspect: "0.0.0.0:9229",
        environment: 'jsdom'
    }
});
//# sourceMappingURL=vite.config.build.js.map