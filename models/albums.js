const { Sequelize } = require('sequelize');

const sequelize = require('../util/database');

const Album = sequelize.define('album', {
    AlbumId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Name: Sequelize.STRING,
});

module.exports = Album;