'use strict';
module.exports = {
   up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      requirement: {
        type: Sequelize.TEXT
      },
      availibility: {
        type: Sequelize.STRING
      },
      timeOfContract: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
   down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Details');
  }
};