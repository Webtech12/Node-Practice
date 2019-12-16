const validator = require('validator')
const getNotes = require('./functions/utils.js')

let val = getNotes('Your notes...')

console.log(process.argv);

if (process.argv[2] === 'add') {
    console.log('adding notes...');
} else if(process.argv[2] === 'remove') {
console.log('removing notes...');
}

// console.log(val);

// console.log(validator.isURL('https://atelog.serco.ae'));