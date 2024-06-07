import js from '@eslint/js';
import * as tsParser from '@typescript-eslint/parser';
import globals from 'globals';

export default [
    js.configs.recommended,
    {
        rules: {
            'no-unused-vars': 'off',
            'no-shadow': 'off',
            'no-param-reassign': 'off',
            'no-undef': 'off',
            'arrow-body-style': 'off',
            'import/no-unresolved': 'off',
            'import/extensions': 'off',
            'import/no-extraneous-dependencies': 'off',
            'no-underscore-dangle': 'off',
            'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
        },
    },
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
