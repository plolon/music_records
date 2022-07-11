const service = require('../services/music');

exports.getAll = (req, res, next) => {
  service.getById(req, results =>{
    res.send(results);
  });
};
// exports.getById = (req, res, next) => {
//   let query = createGetQuery(req, req.params.id);
//   res.send(query);
// };
// exports.getArtistsByGenre = (req, res, next) => {
//   let genreId = req.params.genreId;
//   res.send(
//     'SELECT * FROM artists WHERE artistid IN (SELECT artistid FROM albums WHERE albumid IN (SELECT albumid FROM tracks WHERE genreid IN (SELECT genreid FROM genres WHERE genreid = ' +
//       genreId +
//       '))) ORDER BY name'
//   );
// };
// exports.getArtistsWithTrackCount = (req, res, next) => {
//   res.send(
//     'SELECT a.artistid, COUNT(t.trackid) AS tracksCount FROM artists AS a JOIN albums AS al ON a.artistId=al.artistId JOIN tracks as t ON al.albumid=t.albumid GROUP BY a.artistid'
//   );
//};


