// Dependencies
const app = require('express').Router();
const fs = require('fs');


// NPM package
const {readFromFile, readAndAppend, writeToFile} = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET route for notes page
app.get('/', (req, res) => {
    readFromFile('db/db.json', 'utf-8').then((data) => {
       console.log(data)
      res.json(JSON.parse(data))
  })  .catch((err) => console.log(err));
});

app.post('/', (req, res) => {
  console.info(`${req.method} request received to submit note!`);


  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (title && text) {
    // Variable for the object we will save
    const addNote = {
      title,
      text,
      id: uuid(),
    }
  
    // Pushing newNote to db.json file
    readAndAppend(addNote, 'db/db.json');
    
    const response = {
      status: 'success',
      body: addNote,
    };

    res.json(response);
  } else {
    res.json('Error in adding note!')
  }

});

app.delete('/:id', async (req,res) => {
  console.info(`${req.method} request received to delete note!`);

  const rmNote = req.params.id;
  let getFile = await readFromFile('db/db.json');
  getFile = JSON.parse(getFile);

  getFile = getFile.filter(x => x.id !== rmNote);
  writeToFile('db/db.json', getFile);

  res.json('Note successfully removed!');
});

module.exports = app;