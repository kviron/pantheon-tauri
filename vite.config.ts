import { resolve } from 'path';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import solid from 'vite-plugin-solid';
import babel from 'vite-plugin-babel';
import stylex from '@stylexjs/rollup-plugin';

export default defineConfig(async () => ({
    plugins: [
        solid(),
        babel(),
        { ...stylex({}) },
        {
            ...eslint({ fix: true }),
        },
    ],
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
    define: {
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('http://localhost:8000'),
        __PROJECT__: JSON.stringify('frontend'),
    },
}));
