// Dependencies
const api = require('express').Router();
const fs = require('fs');

// NPM package
const {readFromFile, readAndAppend, writeToFile} = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET route for notes page
api.get('/', (req, res) => {
  if(req.method == 'GET'){
    readFromFile('./db/db.json', 'utf8').then((data) => res.json(JSON.parse(data)));
  }
});

api.post('/', (req, res) => {
  console.info(`${req.method} request received to submit notes!`);


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

api.delete('/:id', (req,res) => {
  newNote.splice(req.params.id, 1);
  res.send('Note has been deleted!');
});

module.exports = api;