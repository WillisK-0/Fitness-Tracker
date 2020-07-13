"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      gender: DataTypes.STRING,
      feet: DataTypes.INTEGER,
      inches: DataTypes.INTEGER,
      weight: DataTypes.INTEGER,
      age: DataTypes.INTEGER,
      goal: DataTypes.STRING,
      Activity: DataTypes.STRING,
    },
    {}
  );
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
