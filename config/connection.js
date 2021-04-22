// including dotenv to hide credentials in a .env file
require("dotenv").config();
// including sequelize to interact with mysql database
const Sequelize = require("sequelize");
// setting connection requirements from .env file
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: "localhost",
      dialect: "mysql",
      dialectOptions: {
        decimalNumbers: true,
      },
    });
// exporting sequelize to be used in other files
module.exports = sequelize;
