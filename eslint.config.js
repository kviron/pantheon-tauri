import js from '@eslint/js';
import * as tsParser from '@typescript-eslint/parser';
import globals from 'globals';

export default [
    js.configs.recommended,
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: 'tsconfig.json',
            },
            globals: {
                ...globals.browser,
            },
        },
    },
];
