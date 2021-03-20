const fs = require("fs");
const util = require("util");
// const uuid = require('uuid/v1');
const { v4: uuidv4 } = require("uuid");
const path = require('path');

const readFile = util.promisify(fs.readFileSync);
const writeFile = util.promisify(fs.writeFile);

// const myFile = fs.readFileSync("./db.json", "utf8")
// console.log(myFile)
class Storage {
    
  readNote() {
    //utf8 takes the json and renders as utf8 char coding for html
    return fs.readFileSync("../db/db.json", "utf8");
  }
  writeNote(input) {
    return writeFile("../db/db.json", JSON.stringify(input));
  }
  getNotes() {
    return this.readNote().then((notes) => {
      let noteParser;
      try {
        noteParser = [].concat(JSON.parse(notes));
      } catch (error) {
        noteParser = [];
      }
      return noteParser;
    });
  }
  addNote(note) {
    const { title, text } = note;
    const newNote = { title, text, id: uuidv4() };
    return this.getNotes()
      .then((notes) => [...notes, newNote])
      .then((updateNote) => this.writeNote(updateNote))
      .then(() => newNote);
  }
}

module.exports = Storage;
// const things = new Storage
// console.log(things.readNote())