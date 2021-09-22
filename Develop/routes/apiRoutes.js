const router = require("express").Router();
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

router.get("/notes", (req, res) => {
    fs.readFile(path.join(__dirname, "../db/db.json"), (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    })
});

// fs writeFile to read contents of my dbData (add above)
router.post("/notes", (req, res) => {
    const newNote = req.body;

    newNote.id = uuidv4(),

    fs.readFile(path.join(__dirname, "../db/db.json"), (err, data) => {
        if (err) throw err;

        let savedNotes = JSON.parse(data);
        savedNotes.push(newNote);
        fs.writeFile(`${__dirname}/../db/db.json`, JSON.stringify(savedNotes), (err, data) => {
            if (err) throw err;
            res.json(newNote);
        })
    })
})

module.exports = router;
