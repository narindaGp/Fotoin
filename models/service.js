'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    get formatPrice(){
      const format = this.price.toString().split('').reverse().join('');
      const convert = format.match(/\d{1,3}/g);
      const rupiah = 'Rp. ' + convert.join('.').split('').reverse().join('') + ',00'
      return rupiah
    }

    static associate(models) {
      // define association here
      Service.belongsTo(models.User)
      Service.hasOne(models.Detail)
    }
  }
  Service.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Service',
  });
  return Service;
};