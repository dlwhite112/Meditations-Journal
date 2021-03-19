const express = require('express');

const fs = require('fs')


const savedNotes = fs.readFileSync("/Users/vron/Desktop/Meditations-Journal/Develop/db/db.json", 'utf8');
const newNotes = []

const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));





   

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

