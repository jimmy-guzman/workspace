const path = require('path')
const Config = require('webpack-chain')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CircularDependencyPlugin = require('circular-dependency-plugin')

const config = new Config()

config.output
  .publicPath('/')
  .end()
  .resolve.extensions.add('.js')
  .add('.jsx')
  .add('.json')
  .add('.ts')
  .add('.tsx')

config.module
  .rule('compile')
  .test(/\.(js|jsx|ts|tsx)$/)
  .exclude.add(/node_modules/)
  .end()
  .use('babel')
  .loader('babel-loader')
  .options({
    cacheDirectory: path.join(__dirname, '../../.cache/babel')
  })
  .end()
  .use('eslint')
  .loader('eslint-loader')
  .end()

config.module
  .rule('html')
  .test(/\.html$/)
  .use('html')
  .loader('html-loader')
  .options({ minimize: true })

config.module
  .rule('images')
  .test(/\.(png|jpe?g)/i)
  .use('url')
  .loader('url-loader')
  .options({
    name: './img/[name].[ext]',
    limit: 10000
  })
  .end()
  .use('img')
  .loader('img-loader')
  .end()

config.module
  .rule('css')
  .test(/\.css$/)
  .use('mini-css')
  .loader(MiniCssExtractPlugin.loader)
  .end()
  .use('css')
  .loader('css-loader')
  .end()
  .use('postcss')
  .loader('postcss-loader')
  .options({ config: { path: path.join(__dirname, './postcss.config.js') } })
  .end()

config.module
  .rule('sass')
  .test(/\.scss$/)
  .use('mini-css')
  .loader(MiniCssExtractPlugin.loader)
  .end()
  .use('css')
  .loader('css-loader')
  .end()
  .use('postcss')
  .loader('postcss-loader')
  .options({ config: { path: path.join(__dirname, './postcss.config.js') } })
  .end()
  .use('sass')
  .loader('sass-loader')
  .end()

config.plugin('html').use(HtmlWebPackPlugin, [
  {
    template: 'src/index.html',
    filename: './index.html',
    favicon: 'src/img/favicon.ico'
  }
])

config.plugin('css').use(MiniCssExtractPlugin, [
  {
    filename: '[name].css',
    chunkFilename: '[id].css'
  }
])

config.plugin('circular').use(CircularDependencyPlugin, [
  {
    failOnError: false,
    allowAsyncCycles: true
  }
])

module.exports = config
