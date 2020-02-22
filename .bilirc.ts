import { Config } from 'bili'
import path from 'path'

const baseConfig: Config = {
  input: './src/index.ts',
  output: {
    minify: true,
    format: ['umd', 'esm'],
    dir: './dist'
  },
  plugins: {
    'peer-deps-external': true,
    typescript2: {
      typescript: require('typescript'),
      cacheRoot: path.join(__dirname, '.cache/rpt2'),
      objectHashIgnoreUnknownHack: false,
      useTsconfigDeclarationDir: true
    }
  }
}

export default baseConfig
