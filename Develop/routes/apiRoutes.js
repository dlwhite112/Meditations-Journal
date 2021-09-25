const generateUniqueId = require("generate-unique-id");
const router = require("express").Router();
const fs = require("fs");
var savedNotes;

router.get("/notes", (req, res) => {
  fs.readFile(`${__dirname}/../db/db.json`, (err, data) => {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
});

// router.delete("/notes/:id", (req, res) => {
//   const note = req.params.id;

//   // savedNotes = savedNotes.filter(function(data) {
//   //     console.log(`Lets See if this data.id is actually the correct ${data.id}`)
//   //   return data.id != req.params.id;
//   // });
//   // console.log("Deleting note with id " + req.params.id);
//   fs.readFile(`${__dirname}/../db/db.json`, (err, data) => {
//     if (err) throw err;

//     let remainingNotes = data.filter((e) => e.id !== note);
//     // res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end(remainingNotes);
//   });

//   return res.json(true);
// });

router.delete("/api/notes/", (req, res) => {
    console.log(req.params.id)
  savedNotes = savedNotes.filter(function (note) {
      console.log(`HOPEFULLY THIS IS GOING TO SHOW ME THE NOTE.ID IS ${note.id}`)
     note.id !== req.params.id;
  });
  console.log("Deleting note with id " + req.params.id);
  fs.writeFile(
    `${__dirname}/../db/db.json`,
    JSON.stringify(savedNotes, "\t"),
    (err) => {
      if (err) {
        throw err;
      }
    }
  );

   res.json(true);
});

// fs writeFile to read contents of my dbData (add above)
router.post("/notes", (req, res) => {
  const newNote = req.body;

  (newNote.id = generateUniqueId()),
    // console.log(newNote);

    fs.readFile(`${__dirname}/../db/db.json`, (err, data) => {
      if (err) throw err;

      savedNotes = JSON.parse(data);
      savedNotes.push(newNote);
      fs.writeFile(
        `${__dirname}/../db/db.json`,
        JSON.stringify(savedNotes),
        (err, data) => {
          if (err) throw err;
          console.log("Saved note");
          res.json(newNote);
        }
      );
    });
});

module.exports = router;
