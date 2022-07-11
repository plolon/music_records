const service = require('../services/music');

exports.getAll = (req, res, next) => {
  service.getAll(req, results =>{
    res.status(results.code).send(results.results);
  });
};
exports.getById = (req, res, next) => {
  service.getById(req, results =>{
    res.status(results.code).send(results.results);
  });
};
exports.getArtistsByGenre = (req, res, next) => {
  service.getArtistsByGenre(req, results =>{
    res.status(results.code).send(results.results);
  });
};
exports.getArtistsWithTrackCount = (req, res, next) => {
  service.getArtistsWithTrackCount(req, results =>{
    res.status(results.code).send(results.results);
  });
};


