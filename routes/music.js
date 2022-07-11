const express = require('express');
const musicController = require('../controllers/music');
const router = express.Router();

// GET /music/findArtistsByGenre/:genreid
router.get('/findArtistsByGenre/:genreid', musicController.getArtistsByGenre);
// GET /music/findArtistsWithTrackCount
router.get('/findArtistsWithTrackCount', musicController.getArtistsWithTrackCount);

module.exports = router;