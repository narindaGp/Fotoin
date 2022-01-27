'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Detail.belongsTo(models.Service)
      Detail.hasMany(models.Gallery)
    }
  }
  Detail.init({
    status: DataTypes.BOOLEAN,
    requirement: DataTypes.TEXT,
    timeOfContract: DataTypes.STRING,
    ServiceId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Detail',
  });
  return Detail;
};