const validator = require('validator')
const yargs = require('yargs')
const getNotes = require('./functions/utils.js')

let val = getNotes('Your notes...')

// commands to run
// add command 
yargs.command({
    command: 'add',
    describe: 'adds new note',
    builder:{
        title:{
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log(`adding new note title: ${argv.title} & new note body: ${argv.body}`)
    }
})
//remove command
yargs.command({
    command: 'remove',
    describe: 'removes new note',
    handler: () => {
        console.log('removing new note')
    }
})
//lists command
yargs.command({
    command: 'lists',
    describe: 'lists new note',
    handler: () => {
        console.log('listing new note')
    }
})
//read command
yargs.command({
    command: 'read',
    describe: 'reads new note',
    handler: () => {
        console.log('reading new note')
    }
})

// works as console log
yargs.parse()

// console.log(yargs.argv)