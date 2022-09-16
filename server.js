const express = require('express');

// Helper method for generating unique ids
const uuid = require('./helpers/uuid');

const PORT = process.env.PORT || 3000;

const app = express();

// Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// Localhost
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
