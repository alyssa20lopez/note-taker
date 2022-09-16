const express = require('express');
const path = require('path');
const fs = require('fs');

// Helper method for generating unique ids
// const uuid = require('./helpers/uuid');

const PORT = 3001;
const notes = require('./db/db.json');

const app = express();

// Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('*', (req, res) =>
res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET request for notes
app.get('/api/notes', (req, res) => {
  // Send a message to the client
  res.status(200).json(`${req.method} request received to get notes`);

  // Returning all saved notes to JSON
  return res.json(db);
});

// POST request to add review
app.post('/api/notes', (req, res) => {
  // Logging that a POST request was received
  console.info(`${req.method} request received to add notes`);
});

// Prepare a response object back to the client
let response;

// Check if there is anything in the response body


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
