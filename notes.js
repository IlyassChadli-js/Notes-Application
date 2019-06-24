const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes .... '
}
const addNotes = (title, body) => {
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateSingle = notes.find((note) => note.title === title )
    //const duplicateNotes = notes.filter(function (note) {
    //    return note.title === title
    //})

    //debugger to debugg with chrome go to chrome and put chrome://inspect and in terminal put node inspect app.js

    if (!duplicateSingle) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('Note title added'))
    } else {
        console.log(chalk.red.inverse('Note title is taken'))
    }


}
const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)//save it 
    fs.writeFileSync('notes.json', dataJson)//write it
}
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')//load Json Data
        const dataJson = dataBuffer.toString()//string it
        return JSON.parse(dataJson)//parse it

    } catch (e) {
        return []
    }

}
const removeNotes = (title) => {
    const notes = loadNotes()
    const notestoKeep = notes.filter((note) => note.title !== title) //return True

    if (notes.length > notestoKeep.length) {
        console.log(chalk.green.inverse('Note Removed'))
        saveNotes(notestoKeep)
    } else {
        console.log(chalk.red.inverse('No note found'))
    }

}
const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.yellow('Your notes : '))

    notes.forEach((note) => {
        console.log(chalk.blue(note.title))
    })
}
const readNotes = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }else{
        console.log(chalk.red.inverse('Note Not Found'))
    }
}


module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes : readNotes

}