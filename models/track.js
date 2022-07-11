const { Sequelize } = require('sequelize');

const sequelize = require('../util/database');

const Track = sequelize.define(
  'track',
  {
    TrackId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    Name: Sequelize.STRING,
    Composer: Sequelize.STRING,
    Milliseconds: Sequelize.INTEGER,
    Bytes: Sequelize.INTEGER,
    UnitPrice: Sequelize.REAL,
  },
  { timestamps: false }
);

module.exports = Track;
