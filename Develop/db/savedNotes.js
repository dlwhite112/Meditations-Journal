const fs = require('fs');
const util = require('util');
const uuid = require('uuid/v1');


const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class Storage {
    readNote() {
        //utf8 takes the json and renders as utf8 char coding for html
        return readFile("db/db.json", "utf8")
    }
    writeNote(input){
        return writeFile("db/db.json", JSON.stringify(input))
    }
    getNotes(){
        return this.readNote().then((notes) => {
            let noteParser;
            try {
                noteParser = [].concat(JSON.parse(notes))
            } catch (error) {
                noteParser = []
            }
            return noteParser
        })
    }
    addNote(note){
        const { title , text } = note;
        const newNote = { title, text, id: uuid() };
        return this.getNotes().then((notes) => [...notes, newNote])
        .then((updateNote) => this.writeNote(updateNote))
        .then(() => newNote)
    }
}

module.exports = Storage;