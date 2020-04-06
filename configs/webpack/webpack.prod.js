const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const baseConfig = require('./webpack.base.js')
const stats = require('./stats')
const { cachePath, postCssConfigPath } = require('./utils')

module.exports = merge.smart(baseConfig, {
  mode: 'production',
  stats,
  output: {
    filename: 'js/[name].[chunkhash:6].js',
    chunkFilename: 'js/[name].[chunkhash:6].js'
  },
  optimization: {
    splitChunks: { chunks: 'all' },
    runtimeChunk: { name: 'manifest' },
    minimizer: [new TerserPlugin({ cache: cachePath('terser') })]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: { path: postCssConfigPath() }
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: { path: postCssConfigPath() }
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:6].css'
    })
  ]
})
