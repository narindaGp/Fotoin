'use strict';
const {
  Model
} = require('sequelize');
let bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Service)
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "username is required"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "email is required"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "password is required"
        }
      }
    },
    role: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: "role is required"
        }
      }
    }
  }, {
    hooks: {
      beforeCreate(User){
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(User.password, salt);
        User.password = hash
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};