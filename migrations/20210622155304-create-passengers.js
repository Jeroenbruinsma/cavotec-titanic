'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('passengers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      sex: {
        type: Sequelize.STRING,
        allowNull: true
      },
      survived: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      passengerClass: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      siblingsOrSpousesAboard: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      parentsOrChildrenAboard: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      fare: {
        type: Sequelize.FLOAT,
        allowNull: false
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('passengers');
  }
};