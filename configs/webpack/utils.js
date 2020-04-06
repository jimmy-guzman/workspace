const path = require('path')

const cachePath = name => path.join(__dirname, `../../.cache/${name}`)
const postCssConfigPath = () => path.join(__dirname, '../../postcss.config.js')
const targetPath = () => path.resolve(process.cwd(), 'src')

module.exports = { cachePath, postCssConfigPath, targetPath }
