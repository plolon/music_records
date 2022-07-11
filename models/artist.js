const { Sequelize } = require('sequelize');

const sequelize = require('../util/database');

const Artist = sequelize.define(
  'artist',
  {
    ArtistId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    Name: Sequelize.STRING,
  },
  { timestamps: false }
);

module.exports = Artist;
