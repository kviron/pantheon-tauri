module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['react-app', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        'i18next',
    ],
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
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'max-len': 'off',
            },
        },
    ],
};
