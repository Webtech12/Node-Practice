const validator = require('validator')
const yargs = require('yargs')
const getNotes = require('./functions/utils.js')

let val = getNotes('Your notes...')

console.log(process.argv)
console.log(yargs.argv)
