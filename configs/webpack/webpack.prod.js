const baseConfig = require('./webpack.base.js')

baseConfig.mode('production').stats({
  colors: true,
  assets: true,
  assetsSort: '!size',
  builtAt: false,
  hash: false,
  version: false,
  timings: false,
  entrypoints: false,
  modules: false,
  warnings: true,
  errors: true,
  chunks: false,
  chunkGroups: false,
  children: false,
  moduleTrace: true,
  errorDetails: true
})

module.exports = baseConfig.toConfig()
