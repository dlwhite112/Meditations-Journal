const express = require('express');
const path = require('path');
const fs = require('fs')


const savedNotes = fs.readFileSync("/Users/vron/Desktop/Meditations-Journal/Develop/db/db.json", 'utf8');

const app = express();
const PORT = 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));

//API Routing
app.get('/api/notes', (req, res) => res.json(savedNotes));

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
