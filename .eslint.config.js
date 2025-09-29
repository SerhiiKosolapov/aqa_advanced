export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2021,
      globals: {
        describe: 'readonly',
        test: 'readonly',
        expect: 'readonly'
      }
    },
    plugins: {
      eslint: require('eslint/use-at-your-own-risk')
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'off'
    }
  }
];