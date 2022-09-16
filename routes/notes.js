// Dependencies
const path = require('path');
const fs = require('fs')

// NPM package
const uuid = require('../helpers/uuid');

// Routing
module.exports = (app) => {

  // GET route for notes page
  app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'))
  });

  app.post('/api/notes', (req, res) => {
    let db = fs.readFileSync('..db/db.json');
    db = JSON.parse(db);
    res.json(db);
  });  
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
    };

    // Pushing newNote to db.json file
     db.push(newNote);
     fs.writeFileSync('db/db.json', JSON.stringify(db));
     res.json(db);
};