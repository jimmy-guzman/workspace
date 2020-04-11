const { name } = require('./package')
const base = require('../../jest.config.base.js')

module.exports = {
  ...base,
  roots: ['<rootDir>/src'],
  name,
  displayName: name,
}
