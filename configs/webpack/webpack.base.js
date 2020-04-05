const path = require('path')
const Config = require('webpack-chain')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CircularDependencyPlugin = require('circular-dependency-plugin')

const { rules, plugins, loaders } = require('./constants')

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
  .rule(rules.COMPILE_JS)
  .test(/\.(js|jsx|ts|tsx)$/)
  .exclude.add(/node_modules/)
  .end()
  .use(loaders.BABEL_LOADER)
  .loader('babel-loader')
  .options({
    cacheDirectory: path.join(__dirname, '../../.cache/babel')
  })
  .end()
  .use(loaders.ESLINT_LOADER)
  .loader('eslint-loader')
  .end()

config.module
  .rule(rules.COMPILE_HTML)
  .test(/\.html$/)
  .use(loaders.HTML_LOADER)
  .loader('html-loader')
  .options({ minimize: true })

config.module
  .rule(rules.COMPILE_IMAGES)
  .test(/\.(png|jpe?g)/i)
  .use(loaders.URL_LOADER)
  .loader('url-loader')
  .options({
    name: './img/[name].[ext]',
    limit: 10000
  })
  .end()
  .use(loaders.IMG_LOADER)
  .loader('img-loader')
  .end()

config.module
  .rule(rules.COMPILE_CSS)
  .test(/\.css$/)
  .use(loaders.EXTRACT_CSS_LOADER)
  .loader(MiniCssExtractPlugin.loader)
  .end()
  .use(loaders.CSS_LOADER)
  .loader('css-loader')
  .end()
  .use(loaders.POSTCSS_LOADER)
  .loader('postcss-loader')
  .options({ config: { path: path.join(__dirname, './postcss.config.js') } })
  .end()

config.module
  .rule(rules.COMPILE_SASS)
  .test(/\.scss$/)
  .use(loaders.EXTRACT_CSS_LOADER)
  .loader(MiniCssExtractPlugin.loader)
  .end()
  .use(loaders.CSS_LOADER)
  .loader('css-loader')
  .end()
  .use(loaders.POSTCSS_LOADER)
  .loader('postcss-loader')
  .options({ config: { path: path.join(__dirname, './postcss.config.js') } })
  .end()
  .use(loaders.SASS_LOADER)
  .loader('sass-loader')
  .end()

config.plugin(plugins.HTML_PLUGIN).use(HtmlWebPackPlugin, [
  {
    template: 'src/index.html',
    filename: './index.html',
    favicon: 'src/img/favicon.ico'
  }
])

config.plugin(plugins.EXTRACT_CSS_PLUGIN).use(MiniCssExtractPlugin, [
  {
    filename: 'css/[name].[contenthash:6].css'
  }
])

config.plugin(plugins.CIRCULAR_DEPS_PLUGIN).use(CircularDependencyPlugin, [
  {
    failOnError: false,
    allowAsyncCycles: true
  }
])

module.exports = config
