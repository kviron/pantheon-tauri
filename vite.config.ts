import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig(async () => ({
    plugins: [
        react(),
        svgr({
            svgrOptions: {
                exportType: 'default',
            },
        }),
    ],
    clearScreen: false,
    build: {
        target: 'esnext',
    },
    server: {
        port: 1420,
        strictPort: true,
        watch: {
            ignored: ['**/src-tauri/**'],
        },
    },
    resolve: {
        alias: {
            '@': resolve('src'),
        },
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./tests/setup.ts'],
        testMatch: ['./tests/**/*.test.tsx'],
    },
    define: {
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('http://localhost:8000'),
        __PROJECT__: JSON.stringify('frontend'),
    },
    css: {
        preprocessorOptions: {
            // Import SCSS pre -compilation programs
            scss: {
                additionalData: `@use "@/app/styles/utils.scss" as *;`,
            },
        },
    },
}));
