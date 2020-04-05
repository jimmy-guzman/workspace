const baseConfig = require('./webpack.base.js')
const stats = require('./stats')

baseConfig.mode('production').stats({ ...stats })

module.exports = baseConfig.toConfig()
