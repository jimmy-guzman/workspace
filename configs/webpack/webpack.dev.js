const baseConfig = require('./webpack.base.js')
const stats = require('./stats')

baseConfig.mode('development')

baseConfig.devServer.port('8080').contentBase('./dist')

baseConfig.devServer
  .watchOptions({ ignored: /node_modules/ })
  .historyApiFallback(true)
  .open(true)
  .stats({ ...stats, assets: false })

baseConfig.module
  .rule('css')
  .test(/\.css$/)
  .uses.delete('mini-css')
  .end()
  .use('style')
  .loader('style-loader')
  .before('css')
  .end()

baseConfig.module
  .rule('sass')
  .test(/\.scss$/)
  .uses.delete('mini-css')
  .end()
  .use('style')
  .loader('style-loader')
  .before('css')
  .end()

baseConfig.plugins.delete('css')

module.exports = baseConfig.toConfig()
