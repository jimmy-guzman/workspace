const merge = require('webpack-merge')
const path = require('path')

const baseDevConfig = require('../../configs/webpack/webpack.dev')
const baseProdConfig = require('../../configs/webpack/webpack.prod')

const aliases = {
  resolve: {
    alias: {
      '@portfolio': path.resolve(__dirname, 'src'),
    },
  },
}

module.exports = mode => {
  if (mode === 'production') {
    return merge(aliases, baseProdConfig)
  }

  return merge(aliases, baseDevConfig)
}
