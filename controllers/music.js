exports.getAll = (req, res, next) => {
  let query = createGetQuery(req);
  res.send(query);
};
exports.getById = (req, res, next) => {
  let query = createGetQuery(req, req.params.id);
  res.send(query);
};
exports.getArtistsByGenre = (req, res, next) => {
  let genreId = req.params.genreId;
  res.send(
    'SELECT * FROM artists WHERE artistid IN (SELECT artistid FROM albums WHERE albumid IN (SELECT albumid FROM tracks WHERE genreid IN (SELECT genreid FROM genres WHERE genreid = ' +
      genreId +
      '))) ORDER BY name'
  );
};
exports.getArtistsWithTrackCount = (req, res, next) => {
  res.send(
    'SELECT a.artistid, COUNT(t.trackid) AS tracksCount FROM artists AS a JOIN albums AS al ON a.artistId=al.artistId JOIN tracks as t ON al.albumid=t.albumid GROUP BY a.artistid'
  );
};

function createGetQuery(req, id) {
  let select = req.query.select;
  if (!select) select = '*';
  let table = req.params.table;
  let orderBy = req.query.orderby;
  if (!orderBy) orderBy = '';
  else orderBy = 'ORDER BY ' + orderBy;
  if (!id)
   return `SELECT ${select} FROM ${table} ${orderBy}`;
  else
    return `SELECT ${select} FROM ${table} WHERE ${table.slice(0,-1)}id=${id} ${orderBy}`;
}
