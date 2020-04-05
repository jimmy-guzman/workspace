const rules = {
  COMPILE_JS: 'compile-js',
  COMPILE_HTML: 'compile-html',
  COMPILE_IMAGES: 'compile-images',
  COMPILE_CSS: 'compile-css',
  COMPILE_SASS: 'compile-sass'
}

const plugins = {
  HTML_PLUGIN: 'html-plugin',
  EXTRACT_CSS_PLUGIN: 'extract-css',
  CIRCULAR_DEPS_PLUGIN: 'circular-deps-plugin'
}

const loaders = {
  BABEL_LOADER: 'babel-loader',
  CSS_LOADER: 'css-loader',
  SASS_LOADER: 'sass-loader',
  HTML_LOADER: 'html-loader',
  URL_LOADER: 'url-loader',
  IMG_LOADER: 'img-loader',
  EXTRACT_CSS_LOADER: 'extract-css-loader',
  POSTCSS_LOADER: 'postcss-loader',
  ESLINT_LOADER: 'eslint-loader',
  STYLE_LOADER: 'style-loader'
}

module.exports = { rules, plugins, loaders }
