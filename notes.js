const fs=require('fs')
const chalk=require('chalk')

const addNotes = (title,body) => {
    const notes=loadNotes()
    const duplicateNote=notes.find((note) => note.title === title)


    if(!duplicateNote){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.bold.green('Note Added !!'))
    } else{
        console.log(chalk.bold.red('Note Title already Taken!!'))
    }

    
}

const removeNotes= (title) => {
    const notes=loadNotes()
    const newNote=notes.filter( (note) => note.title!==title)
    if(newNote.length===notes.length){
        console.log(chalk.bold.red('Note not Exist!!'))
    }else{
        saveNotes(newNote)
        console.log(chalk.bold.green('Node Removed'))
    }
}

const listNotes = () => {
    const notes= loadNotes()
    console.log(chalk.bold.whiteBright.inverse('Your Notes'))
    notes.forEach((note) => {
        console.log(chalk.bold.green(note.title))
    })
}

const readNotes = (title) =>{
    const notes=loadNotes()
    const note=notes.find((note) => note.title == title)
    if(note){
        console.log(chalk.bold.green("Title : "+note.title))
        console.log(chalk.bold.green("Body : "+note.body))
    }else{
        console.log(chalk.bold.red('Note not Found'))
    }
}

const saveNotes= (notes) => {
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes= () => {
    try{
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJSON=dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

module.exports = {
    addNote:addNotes,
    removeNote:removeNotes,
    listNote:listNotes,
    readNote:readNotes
}