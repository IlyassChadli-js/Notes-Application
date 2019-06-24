const yargs = require('yargs')
const chalk = require("chalk")
const notes = require('./notes.js')

//const msg = 'Success !'
//const validator = require('validator')
//const thisNotes = getNotes()

//console.log(thisNotes)
//console.log(chalk.green.bold(msg))


//console.log(process.argv)


//costumize yargs version 
//yargs.version('1.0.0')

// add , remove , read , list

//create add command 
yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,  //required
            type: 'string'  //forcing type must be a string
        },
        body: {
            describe: 'Note Body',
            demandOption: true,  //required
            type: 'string'  //forcing type must be a string
        }
    },
    handler(argv){
        notes.addNotes(argv.title,argv.body)
    }
})
//create remove command 
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title :{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
    
})
//create list command 
yargs.command({
    command: 'list',
    describe: 'List a note',
    handler(){
        notes.listNotes()
    }
})
//create read command 
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title :{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }  
})

yargs.parse()



