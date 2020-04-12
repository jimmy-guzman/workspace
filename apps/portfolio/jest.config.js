const { name } = require('./package')
const base = require('../../jest.config.base.js')

module.exports = {
  ...base,
  preset: undefined,
  roots: ['<rootDir>/src'],
  name,
  displayName: name,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    ...base.moduleNameMapper,
    '^@portfolio(.*)$': '<rootDir>/src$1',
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'apps/portfolio/src/utils/withThemeProvider',
    'apps/portfolio/src/utils/withMockRouter',
  ],
}
