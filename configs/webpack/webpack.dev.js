const merge = require('webpack-merge')

const baseConfig = require('./webpack.base.js')
const stats = require('./stats')

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    open: true,
    port: 8080,
    overlay: true,
    contentBase: './dist',
    watchOptions: {
      ignored: /node_modules/,
    },
    historyApiFallback: true,
    stats: { ...stats, assets: false },
  },
})
