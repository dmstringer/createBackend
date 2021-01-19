"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Pets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      age: {
        type: Sequelize.FLOAT,
      },
      weight: {
        type: Sequelize.FLOAT,
      },
      gender: {
        type: Sequelize.STRING,
      },
      breed: {
        type: Sequelize.STRING,
      },
      storeId: {
        type: Sequelize.STRING,
      },
      ownerId: {
        type: Sequelize.STRING,
      },
      hasShots: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Pets");
  },
};
