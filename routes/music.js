const express = require('express');
const musicController = require('../controllers/music');
const router = express.Router();

// GET /music/findArtistsByGenre/:genreid
router.get('/findArtistsByGenre/:genreid', musicController.getArtistsByGenre);

module.exports = router;