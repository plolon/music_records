const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');
const Album = require('./models/album');
const Artist = require('./models/artist');
const Genre = require('./models/genre');
const Track = require('./models/track');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const musicRoutes = require('./routes/music');
app.use('/music', musicRoutes);
app.use((req, res, next) => {
    res.status(404).send('Not found');
});

Artist.hasMany(Album, {foreignKey: "ArtistId"});
Album.belongsTo(Artist)
Track.belongsTo(Album)
Album.hasMany(Track, {foreignKey: "AlbumId"});
Track.belongsTo(Genre)
Genre.hasMany(Track, {foreignKey: "GenreId"});

sequelize.sync()
.then(result => {
    app.listen(3000);
})
.catch(err => {
    console.error(err);
});