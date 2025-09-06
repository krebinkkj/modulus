const js = require('@eslint/js')
const  prettier = require('eslint-config-prettier')
const ts = require('typescript-eslint')

module.exports = ts.config(
    js.configs.recommended,
    ...ts.configs.recommended,
    prettier,
    {
        ignores: [
            'node_modules/**',
            'dist/**',
            'coverage/**',
            '**/__tests__/**',
            '*.config.js',
            '*.cjs'
        ],
    }
);