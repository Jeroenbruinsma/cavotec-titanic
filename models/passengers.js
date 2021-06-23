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
    id: {
      type: DataTypes.UUID,
      defaultValue: sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    sex: DataTypes.STRING,
    survived: DataTypes.BOOLEAN,
    passengerClass: DataTypes.INTEGER,
    siblingsOrSpousesAboard: DataTypes.INTEGER,
    parentsOrChildrenAboard: DataTypes.INTEGER,
    fare: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'passengers',
    timestamps: false
  });
  return passengers;
};