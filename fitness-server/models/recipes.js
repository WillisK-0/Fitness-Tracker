'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipes = sequelize.define('Recipes', {
    dish: DataTypes.STRING,
    userid: DataTypes.INTEGER
  }, {});
  Recipes.associate = function(models) {
    // associations can be defined here
  };
  return Recipes;
};