
const generateUniqueId = require('generate-unique-id');
const router = require('express').Router();
const fs = require('fs');

router.get("/notes", (req, res) => {
    fs.readFile(`${__dirname}/../db/db.json`, (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    })
});

// fs writeFile to read contents of my dbData (add above)
router.post("/notes", (req, res) => {
    const newNote = req.body;

    newNote.id = generateUniqueId(),
    console.log(newNote);

    fs.readFile(`${__dirname}/../db/db.json`, (err, data) => {
        if (err) throw err;

        let savedNotes = JSON.parse(data);
        console.log(savedNotes);
        savedNotes.push(newNote);
        fs.writeFile(`${__dirname}/../db/db.json`, JSON.stringify(savedNotes), (err, data) => {
            if (err) throw err;
            console.log("Saved note");
            res.json(newNote);
        })
    })
})

module.exports = router;
