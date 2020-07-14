'use strict';
module.exports = (sequelize, DataTypes) => {
  const Exercise = sequelize.define('Exercise', {
    sets: DataTypes.INTEGER,
    exercise: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    date: DataTypes.STRING,
    userid: DataTypes.STRING
  }, {});
  Exercise.associate = function(models) {
    // associations can be defined here
  };
  return Exercise;
};