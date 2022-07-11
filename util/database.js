const sqlite3 = require('sqlite3').verbose();
const path = require('./path');
const db = new sqlite3.Database(
  `${path}\\data\\dump.db`,
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) console.error(err);
    else console.log('Database connected');
  }
);
module.exports = db;
