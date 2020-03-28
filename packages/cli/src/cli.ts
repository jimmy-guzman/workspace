#!/usr/bin/env node
import yargs from 'yargs'

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
yargs
  .commandDir('cmds', { extensions: ['js', 'ts'] })
  .usage('Usage: jg-cli <command>')
  .demandCommand()
  .help()
  .epilog('Made by @jimmy-guzman').argv
