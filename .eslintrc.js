// Great guide for understanding why things are here and what kind of order they need to be in
// https://blog.theodo.com/2019/08/empower-your-dev-environment-with-eslint-prettier-and-editorconfig-with-no-conflicts/

module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'prettier/@typescript-eslint'],
    env: {
        es6: true,
        node: true,
        jest: true
    },

    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module' // Allows for the use of imports
    },
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '_' }],
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/semi': 0
    }
}
