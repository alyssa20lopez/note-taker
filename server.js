const express = require('express');
const fs = require('fs');
const path = require('path');

// Helper method for generating unique ids
const uuid = require('./helpers/uuid');

const PORT = process.env.PORT || 3000;

const app = express();

// Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// GET route for homepage
app.get('/', (req, res) =>
res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET route for notes page
app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('*', (req, res) =>
res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Localhost
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
