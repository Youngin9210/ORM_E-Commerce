// including Model and DataTypes from sequelize
const { Model, DataTypes } = require("sequelize");
// including connection requirement to connect to db
const sequelize = require("../config/connection.js");
// extending Model with constructor class Category
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
