import { resolve } from 'path';
import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';

export default defineConfig(async () => ({
    plugins: [solid()],
    clearScreen: false,
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
        transformMode: {
            web: [/\.jsx?$/],
        },
    },
    define: {
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('http://localhost:8000'),
        __PROJECT__: JSON.stringify('frontend'),
    },
}));
