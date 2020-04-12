const path = require('path')

const absolutePath = relativePath => path.join(process.cwd(), relativePath)
const cachePath = name => absolutePath(`../../.cache/${name}`)
const postCssConfigPath = () => absolutePath('../../postcss.config.js')
const targetPath = () => absolutePath('src')

module.exports = { cachePath, postCssConfigPath, targetPath }
