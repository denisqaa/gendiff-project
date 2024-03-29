#!/usr/bin/env node

const { Command } = require('commander');

const program = new Command();
program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('0.1.0')
    .arguments('<filepath1> <filepath2>')
    .option('-f, --format <type>', 'output format', '')
    .action((filepath1, filepath2, options) => {
        //todo gendiff
    });
program.parse();