// importing important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// importing database connection from config.js
const sequelize = require("../config/connection.js");
// Tag model (table) by extends off Sequelize's Model class
class Tag extends Model {}
// initializing Tag model
Tag.init(
  {
    // defining table columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tag",
  }
);
// exporting Tag model
module.exports = Tag;
