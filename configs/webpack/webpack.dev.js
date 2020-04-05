const baseConfig = require('./webpack.base.js')

baseConfig.mode('development')

baseConfig.devServer.port('8080').contentBase('./dist')

baseConfig.devServer
  .watchOptions({
    ignored: /node_modules/
  })
  .historyApiFallback(true)
  .open(true)
  .stats({
    colors: true,
    assets: false,
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
