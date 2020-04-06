// const validator=require('validator')
const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List all note',
    handler(){
        notes.listNote()
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()























// const command=process.argv[2]

// if(command === 'add'){
//     console.log('Adding it')
// }else if(command === 'remove'){
//     console.log('Removing it')
// }




// const msg = getNotes()        

// console.log(msg)
// console.log(chalk.bold.blue.inverse.underline('Hello world!'))



// console.log(validator.isURL('http://gmdsd.coawd'))


// const add = require('./utils.js')

//  // const fs=require('fs')

// // // fs.writeFileSync('app.txt','This file is created by NODE.js !!!')
// // fs.appendFileSync('app.txt','My name is Aman.')

// const sum=add(4,5)

// console.log(sum)

