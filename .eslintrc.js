module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    '@vue/standard',
    'plugin:vue/essential',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'curly': 'error',
    'vue/html-indent': ['error', 2, {
      'attribute': 1,
      'baseIndent': 1,
      'closeBracket': 0,
      'alignAttributesVertically': false,
      'ignores': []
    }]
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  globals: {
    'workbox': 'readonly',
  },
}
