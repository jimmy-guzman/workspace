const { name } = require('./package')
const base = require('../../jest.config.base.js')

module.exports = {
  ...base,
  preset: undefined,
  roots: ['<rootDir>/src'],
  name,
  displayName: name,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
}
