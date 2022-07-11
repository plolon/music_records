const path = require('./path');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: `${path}\\data\\dump.db`
});

module.exports = sequelize;