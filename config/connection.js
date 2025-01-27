const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_e_commerce_db,
  process.env.DB_postgres,
  process.env.DB_123123,
  {
host: 'localhost',
    dialect: 'postgres',
    port: 5432,
  }
);

module.exports = sequelize;