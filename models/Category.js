// importing important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// importing database connection from config.js
const sequelize = require("../config/connection.js");
// Category model (table) by extends off Sequelize's Model class
class Category extends Model {}
// initializing Category model
Category.init(
  {
    // defining columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);
// exporting Category for later use
module.exports = Category;
