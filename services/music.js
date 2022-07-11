const db = require('../util/database');

exports.getAll = (req, cb) => {
  let query = createGetQuery(req);
  db.all(query, [], (err, rows) => cb(handleResults(err, rows)));
};
exports.getById = (req, cb) => {
  let query = createGetQuery(req, req.params.id);
  db.get(query, [], (err, row) => cb(handleResults(err, row)));
};
exports.getArtistsByGenre = (req, cb) => {
  let genreId = req.params.genreid;
  let query =
    'SELECT * FROM artists WHERE artistid IN (SELECT artistid FROM albums WHERE albumid IN (SELECT albumid FROM tracks WHERE genreid IN (SELECT genreid FROM genres WHERE genreid = ' +
    genreId +
    '))) ORDER BY name';
    db.all(query, [], (err, rows) => cb(handleResults(err, rows)));
};
exports.getArtistsWithTrackCount = (req, cb) => {
  let genreId = req.params.genreid;
  let query =
    'SELECT a.artistid, a.name, COUNT(t.trackid) AS tracksCount FROM artists AS a JOIN albums AS al ON a.artistId=al.artistId JOIN tracks as t ON al.albumid=t.albumid GROUP BY a.artistid';
    db.all(query, [], (err, rows) => cb(handleResults(err, rows)));
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
function handleResults(err, rows) {
  if (err) return({ code: 400, results: 'Bad Request' });
  else return({ results: rows, code: 200 });
}
