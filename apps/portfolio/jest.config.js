const base = require('../../jest.config.base.js')

module.exports = {
  ...base,
  preset: undefined,
  name: '@jimmy-guzman/portfolio',
  displayName: '@jimmy-guzman/portfolio',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
}
