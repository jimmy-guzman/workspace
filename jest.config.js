const base = require('./jest.config.base.js')

module.exports = {
  projects: ['<rootDir>/{packages,apps}/*/jest.config.js'],
  ...base
}
