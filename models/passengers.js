'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class passengers extends Model {
    static associate(models) {
      // define association here
    }
  };
  passengers.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    sex: DataTypes.STRING,
    survived: DataTypes.BOOLEAN,
    passengerClass: DataTypes.INTEGER,
    siblingsSpousesAboard: DataTypes.INTEGER,
    parentsChildrenAboard: DataTypes.INTEGER,
    fare: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'passengers',
    timestamps: false
  });
  return passengers;
};