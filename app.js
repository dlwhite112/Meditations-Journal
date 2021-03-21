const express = require('express');
const path = require('path')
const html = require('./Develop/routes/htmlRoutes');
const api = require('./Develop/routes/apiRoutes')
// const fs = require('fs')


// const savedNotes = fs.readFileSync("/Users/vron/Desktop/Meditations-Journal/Develop/db/db.json", 'utf8');
// const newNotes = []

const app = express();
const PORT = process.env.PORT || 3006;

// Sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//please work
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '/Develop/public')))
// app.use("./index.html", html);

app.use(html);
app.use(api);

   

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

// console.log(__dirname)