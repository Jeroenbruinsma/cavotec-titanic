'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('passengers', [{
      name: "Test the Tester",
      age: 15,
      sex: "male",
      survived: true,
      passengerClass: 1,
      siblingsOrSpousesAboard: 1,
      parentsOrChildrenAboard: 1,
      fare: "22.29",
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
