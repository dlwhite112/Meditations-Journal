const router = require("express").Router();
const Storage = require("../db/savedNotes");

//API Routing
router.get("/notes", (req, res) => {
  Storage.getNotes().then((notes) => res.json(notes));
});

router.post("/api/notes", (req, res) => {
  Storage.addNote(req.body).then((note) => res.json(note));
});

module.exports = router;
