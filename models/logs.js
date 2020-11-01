'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class logs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  logs.init({
    request: DataTypes.TEXT('long'),
    response: DataTypes.TEXT('long'),
    requestTimestamp: 'TIMESTAMP(6)',
    responseTimestamp: 'TIMESTAMP(6)'
  }, {
    sequelize,
    modelName: 'logs',
  });
  return logs;
};