const baseConfig = require('./webpack.base.js')
const stats = require('./stats')

baseConfig.mode('production').stats({ ...stats })

baseConfig.output
  .filename('js/[name].[chunkhash:6].js')
  .chunkFilename('js/[name].[chunkhash:6].js')

baseConfig.optimization.splitChunks({
  chunks: 'all'
})

baseConfig.optimization.runtimeChunk({
  name: 'manifest'
})

module.exports = baseConfig.toConfig()
