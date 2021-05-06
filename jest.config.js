module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue',
  ],

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  snapshotSerializers: [
    'jest-serializer-vue',
  ],
  testMatch: [
    '**/unit/**/*.spec.(js|jsx|ts|tsx)',
  ],
  testURL: 'http://localhost/',
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',

  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest',
  },
}
