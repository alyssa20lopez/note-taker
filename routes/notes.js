// Dependencies
const fs = require('fs');
const express = require('express');
const routes = require('./routes/notes');

const app = express();
app.use(express.json());
app.use('/', routes);

// NPM package
const {readFromFile, readAndAppend, writeToFile} = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET route for notes page
app.get('/', (req, res) => {
  if(req.method == 'GET'){
    readFromFile('../db/db.json', 'utf8').then((data) => res.json(JSON.parse(data)));
  }
});

app.post('/', (req, res) => {
    let db = fs.readFileSync('..db/db.json');
    db = JSON.parse(db);
    res.json(db);


  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (title && text) {
    // Variable for the object we will save
    const newNote = {
      title,
      text,
      note_id: uuid(),
    }
  
    // Pushing newNote to db.json file
    db.push(newNote);
      fs.writeFileSync('db/db.json', JSON.stringify(db));
      res.json(db);
  };

});

app.delete('/api/notes/:id', (req,res) => {
  newNote.splice(req.params.id, 1);
  res.send('Note has been deleted!');
});

module.exports = app;