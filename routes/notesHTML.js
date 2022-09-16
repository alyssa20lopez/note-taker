const path = require('path');

module.exports = (app) => {
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
};