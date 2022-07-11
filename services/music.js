const db = require('../util/database');

exports.getAll = (req, cb) => {
  let query = createGetQuery(req);
  db.all(query, [], (err, rows) => {
    if (err) return console.error(err);
    cb(rows);
  });
};
exports.getById = (req, cb) => {
  let query = createGetQuery(req, req.params.id);
  db.get(query, [], (err, row) => {
    if (err) return console.error(err);
    cb(row);
  });
};
exports.getArtistsByGenre = (req, cb) => {
  let genreId = req.params.genreid;
  let query =
    'SELECT * FROM artists WHERE artistid IN (SELECT artistid FROM albums WHERE albumid IN (SELECT albumid FROM tracks WHERE genreid IN (SELECT genreid FROM genres WHERE genreid = ' +
    genreId +
    '))) ORDER BY name';
    db.all(query, [], (err, rows) => {
        if (err) return console.error(err);
        cb(rows);
      });
};
exports.getArtistsWithTrackCount = (req, cb) => {
    let genreId = req.params.genreid;
    let query =
    'SELECT a.artistid, a.name, COUNT(t.trackid) AS tracksCount FROM artists AS a JOIN albums AS al ON a.artistId=al.artistId JOIN tracks as t ON al.albumid=t.albumid GROUP BY a.artistid';
      db.all(query, [], (err, rows) => {
          if (err) return console.error(err);
          cb(rows);
        });
  };

function createGetQuery(req, id) {
  let select = req.query.select;
  if (!select) select = '*';
  let table = req.params.table;
  let orderBy = req.query.orderby;
  if (!orderBy) orderBy = '';
  else orderBy = 'ORDER BY ' + orderBy;
  if (!id) return `SELECT ${select} FROM ${table} ${orderBy}`;
  else
    return `SELECT ${select} FROM ${table} WHERE ${table.slice(
      0,
      -1
    )}id=${id} ${orderBy}`;
}