module.exports = {
  moduleNameMapper: {
    '^vue$': 'vue/dist/vue.common.js',
    '^@/(.*)$': '<rootDir>/components/$1'
  },
  moduleFileExtensions: ['js', 'vue'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.*\\.(vue)$': 'vue-jest'
  },
  testMatch: ['**/tests/**/(*.)+(spec|test).js'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/components/**/*.(js|vue)',
    '!**/components/**/(*.)+(stories).(js|vue)',
    '!**/node_modules/**'
  ]
};
