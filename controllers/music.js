const service = require('../services/music');

exports.getAll = (req, res, next) => {
  service.getAll(req, results =>{
    res.send(results);
  });
};
exports.getById = (req, res, next) => {
  service.getById(req, results =>{
    res.send(results);
  });
};
exports.getArtistsByGenre = (req, res, next) => {
  service.getArtistsByGenre(req, results =>{
    res.send(results);
  });
};
exports.getArtistsWithTrackCount = (req, res, next) => {
  service.getArtistsWithTrackCount(req, results =>{
    res.send(results);
  });
};


