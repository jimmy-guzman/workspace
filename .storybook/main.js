const custom = require('../configs/webpack/webpack.dev')

module.exports = {
  stories: ['../**/**/src/**/*.stories.(jsx|tsx)'],

  webpackFinal: config => {
    config.module.rules = config.module.rules.map(rule => {
      if (rule.test.toString() === '/\\.(mjs|jsx?)$/') {
        rule.test = /\.(mjs|jsx|tsx?)$/
      }

      return rule
    })

    config.resolve = {
      ...config.resolve,
      extensions: custom.resolve.extensions
    }

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader'
        },
        'sass-loader'
      ]
    })

    return config
  }
}
