import fs from 'fs'
import which from 'which'
import path from 'path'

export function importBin(modName: string, { executable = modName, cwd = process.cwd() } = {}) {
  let pathFromWhich

  try {
    pathFromWhich = fs.realpathSync(which.sync(executable))
    if (pathFromWhich && pathFromWhich.includes('.CMD')) return pathFromWhich
  } catch (_error) {
    // ignore _error
  }

  try {
    const modPkgPath = require.resolve(`${modName}/package.json`)
    const modPkgDir = path.dirname(modPkgPath)
    const { bin } = require(modPkgPath)
    const binPath = typeof bin === 'string' ? bin : bin[executable]
    const fullPathToBin = path.join(modPkgDir, binPath)

    if (fullPathToBin === pathFromWhich) {
      return executable
    }

    return fullPathToBin.replace(cwd, '.')
  } catch (error) {
    if (pathFromWhich) {
      return executable
    }

    throw error
  }
}
