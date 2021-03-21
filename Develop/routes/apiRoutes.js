const router = require("express").Router();
const Storage = require("../db/savedNotes");
const api = new Storage();
//API Routing

router.get("/api/notes", (req, res) => {
  res.json(api.readNote());
});

router.get("/notes", (req, res) => {
  // api.getNotes(req.body).then((notes) => res.json(notes));
});

router.post("/api/notes", (req, res) => {
  req.body.id = api.id()
  // api.addNote(req.body).then((note) => res.json(note));
  api.writeNote(req.body);
  // api.readNote(req.body);
  res.json(api.readNote());
});

module.exports = router;

// console.log(api.readNote())
