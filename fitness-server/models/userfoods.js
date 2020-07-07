'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserFoods = sequelize.define('UserFoods', {
    food: DataTypes.STRING,
    calories: DataTypes.INTEGER,
    userid: DataTypes.INTEGER
  }, {});
  UserFoods.associate = function(models) {
    // associations can be defined here
  };
  return UserFoods;
};