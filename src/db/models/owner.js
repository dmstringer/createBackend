"use strict";
module.exports = (sequelize, DataTypes) => {
  const Owner = sequelize.define(
    "Owner",
    {
      id: DataTypes.FLOAT,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {}
  );
  Owner.associate = function (models) {
    // associations can be defined here
  };
  return Owner;
};
