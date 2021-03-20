const router = require("express").Router();
const Storage = require("../db/savedNotes");
const api = new Storage
//API Routing


router.get("/api/notes", (req, res) => {
    res.json(api.readNote())
  })

router.get("/notes", (req, res) => {
  api.getNotes().then((notes) => res.json(notes));
});



router.post("/api/notes", (req, res) => {
  api.addNote(req.body).then((note) => res.json(note));
});

module.exports = router;

console.log(api.readNote())