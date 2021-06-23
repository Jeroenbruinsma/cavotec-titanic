'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('passengers', {
     //to install the postgress extension on the db 
     //CREATE EXTENSION IF NOT EXISTS "uuid-ossp"
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.literal('uuid_generate_v4()')
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
        type: Sequelize.STRING, //ugly, done for aws glue import
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