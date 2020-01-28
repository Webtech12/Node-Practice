const fs = require('fs')


// helper functions
const getNotes = () => { 
    return "Your notes..." 
}

const addNote = (title, body) => {
    const notes = loadNotes()

    notes.push({
        title: title,
        body: body
    })
    console.log(notes)

    saveNotes(notes)
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
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