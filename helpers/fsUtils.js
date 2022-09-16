const fs = require('fs');
const util = require('util');

const readFromFile = util.promisify(fs.readFile);

const writeToFile = ('./db/db.json', newNote) =>
  fs.writeFile(destination, JSON.stringify(newNote, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${'./db/db.json'}`)
  );

const readAndAppend = (newNote, './db/db.json') => {
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(newNote);
      writeToFile('./db/db.json', parsedData);
    }
  });
};

module.exports = { readFromFile, writeToFile, readAndAppend };