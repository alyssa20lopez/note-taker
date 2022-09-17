const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());

// Middleware for parsing application/json and urlencoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
const api = require('./routes/api.js');
app.use('/api', api);

const PORT = process.env.PORT || 3001;

// GET route for notes page
app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET route for homepage
app.get('*', (req, res) =>
res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Localhost
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
