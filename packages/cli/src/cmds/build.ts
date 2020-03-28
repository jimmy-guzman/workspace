import yargs from 'yargs'
import rollup from 'rollup'

export const command = 'build [args]'
export const desc = 'Builds source code.'

export const builder = () =>
  yargs.command(
    '$0',
    'the default command',
    () => {},
    argv => {
      rollup.rollup({})
    }
  ).argv

export const handler = (argv: any) => {
  if (argv._[0]) {
    console.log(`\nUnknown commmand ${argv._[0]}, please see the command list below:`)
    console.log('')
    yargs.showHelp()
  }
}
