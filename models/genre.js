const { Sequelize } = require('sequelize');

const sequelize = require('../util/database');

const Genre = sequelize.define('genre', {
    GenreId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Name: Sequelize.STRING,
});

module.exports = Genre;