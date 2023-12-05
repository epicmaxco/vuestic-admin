module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  plugins: ['@typescript-eslint'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2021,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    'plugin:storybook/recommended',
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': ['warn', {}, { usePrettierrc: true, indent: 2 }],
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-explicit-any': 0, // allow explicit any's because of the legacy code and ts-less deps, but still prohibit IMplicit any's
    'vue/multi-word-component-names': 0,
    'vue/no-lone-template': 0,
    'vue/v-on-event-hyphenation': ['warn', 'never', { autofix: true }],
    'vue/component-name-in-template-casing': ['warn', 'PascalCase', { registeredComponentsOnly: false }],
    'vue/script-indent': ['warn', 2], // , { baseIndent: 0 } - we should use that, but it didn't work for me for some reason.
  },
}
