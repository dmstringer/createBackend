"use strict";
module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define(
    "Pet",
    {
      id: DataTypes.FLOAT,
      name: DataTypes.STRING,
      age: DataTypes.FLOAT,
      weight: DataTypes.FLOAT,
      gender: DataTypes.STRING,
      breed: DataTypes.STRING,
      storeId: DataTypes.STRING,
      ownerId: DataTypes.STRING,
      hasShots: DataTypes.BOOLEAN,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {}
  );
  Pet.associate = function (models) {
    // associations can be defined here
  };
  return Pet;
};
