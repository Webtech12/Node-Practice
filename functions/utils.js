const fs = require('fs')


// helper functions
const getNotes = () => { 
    return "Your notes..." 
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) { 
        return note.title === title
     })

     if (duplicateNotes === 0) {
        notes.push({
            title: title,
            body: body
        })
        console.log(notes)
        saveNotes(notes)
     } else {
        console.log('Title taken')
     }    
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