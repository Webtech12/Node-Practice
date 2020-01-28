const fs = require('fs')


// helper functions
const getNotes = () => { 
    return "Your notes..." 
}

const addNote = (title, body) => {
    const notes = loadNotes()
    console.log(notes)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = JSON.parse(dataBuffer)
        return dataJson
    } catch (e) {
        return []
    }
}


// exporting multiple functions
module.exports = {
    getNotes: getNotes,
    addNote: addNote
}