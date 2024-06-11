import { resolve } from 'path';
import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import suidPlugin from '@suid/vite-plugin';
import solidSvg from 'vite-plugin-solid-svg';

export default defineConfig(async () => ({
    plugins: [
        solid(),
        suidPlugin(),
        solidSvg({
            defaultAsComponent: true,
            svgo: {
                svgoConfig: {
                    plugins: [
                        'removeUselessStrokeAndFill',
                        'cleanupEnableBackground',
                        'removeEmptyAttrs',
                        'removeMetadata',
                    ],
                },
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
        transformMode: {
            web: [/\.jsx?$/],
        },
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
