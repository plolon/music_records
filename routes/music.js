const express = require('express');
const musicController = require('../controllers/music');
const router = express.Router();

// GET /music/findArtistsWithTrackCount
router.get('/findArtistsWithTrackCount', musicController.getArtistsWithTrackCount);
// GET /music/findArtistsByGenre/:genreid
router.get('/findArtistsByGenre/:genreid', musicController.getArtistsByGenre);
// GET /music/:table
router.get('/:table', musicController.getAll);
// GET /music/:table/:id
router.get('/:table/:id', musicController.getById);

module.exports = router;