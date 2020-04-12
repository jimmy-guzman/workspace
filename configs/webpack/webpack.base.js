const HtmlWebPackPlugin = require('html-webpack-plugin')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const { cachePath, postCssConfigPath, targetPath } = require('./utils')

const include = targetPath()

module.exports = {
  output: {
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx|ts|tsx)$/,
        include,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          cache: cachePath('eslint'),
        },
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: cachePath('babel'),
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader', options: { minimize: true } }],
      },
      {
        test: /\.(png|jpe?g)/i,
        include,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: './img/[name].[ext]',
              limit: 10000,
            },
          },
          {
            loader: 'img-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: { path: postCssConfigPath() },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        include,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: { path: postCssConfigPath() },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: 'src/index.html',
      filename: './index.html',
      favicon: 'src/img/favicon.ico',
    }),
    new CircularDependencyPlugin({
      failOnError: false,
      allowAsyncCycles: true,
    }),
  ],
}
