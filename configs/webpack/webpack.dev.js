const baseConfig = require('./webpack.base.js')
const stats = require('./stats')
const { rules, loaders, plugins } = require('./constants')

baseConfig.mode('development')

baseConfig.devServer.port('8080').contentBase('./dist')

baseConfig.devServer
  .watchOptions({ ignored: /node_modules/ })
  .historyApiFallback(true)
  .open(true)
  .stats({ ...stats, assets: false })

baseConfig.module
  .rule(rules.COMPILE_CSS)
  .test(/\.css$/)
  .uses.delete(loaders.EXTRACT_CSS_LOADER)
  .end()
  .use(loaders.STYLE_LOADER)
  .loader('style-loader')
  .before(loaders.CSS_LOADER)
  .end()

baseConfig.module
  .rule(rules.COMPILE_SASS)
  .test(/\.scss$/)
  .uses.delete(loaders.EXTRACT_CSS_LOADER)
  .end()
  .use(loaders.STYLE_LOADER)
  .loader('style-loader')
  .before(loaders.CSS_LOADER)
  .end()

baseConfig.plugins.delete(plugins.EXTRACT_CSS_PLUGIN)

module.exports = baseConfig.toConfig()
