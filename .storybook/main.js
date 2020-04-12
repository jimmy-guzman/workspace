const path = require('path')
const custom = require('../configs/webpack/webpack.dev')

module.exports = {
  stories: ['../**/**/src/**/*.stories.(jsx|tsx|ts)'],
  addons: [
    '@storybook/addon-viewport/register',
    '@storybook/addon-docs',
    '@storybook/addon-actions/register',
  ],

  webpackFinal: config => {
    config.module.rules = config.module.rules.map(rule => {
      if (rule.test.toString() === '/\\.(mjs|jsx?)$/') {
        rule.test = /\.(mjs|jsx|tsx?)$/
        rule.use.push({
          loader: require.resolve('react-docgen-typescript-loader'),
        })
      }

      return rule
    })

    config.resolve = {
      ...config.resolve,
      alias: { '@portfolio': path.join(process.cwd(), 'apps/portfolio/src') },
      extensions: custom.resolve.extensions,
    }

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
        },
        'sass-loader',
      ],
    })

    return config
  },
}
