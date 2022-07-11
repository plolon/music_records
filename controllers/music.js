const service = require('../services/music');
const Genre = require('../models/genre');
const Album = require('../models/album');
const Track = require('../models/track');
const sequelize = require('sequelize');
// exports.getAll = (req, res, next) => {
//   service.getAll(req, results =>{
//     res.status(results.code).send(results.results);
//   });
// };
// exports.getById = (req, res, next) => {
//   service.getById(req, results =>{
//     res.status(results.code).send(results.results);
//   });
// };
exports.getArtistsByGenre = (req, res, next) => {
  const genreId = req.params.genreid;
  Genre.findByPk(genreId)
    .then((genre) => {
      return genre.getTracks();
    })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.error(err));
};
// exports.getArtistsWithTrackCount = (req, res, next) => {
//   service.getArtistsWithTrackCount(req, results =>{
//     res.status(results.code).send(results.results);
//   });
// };
