'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('logs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      requestTimestamp: {
        allowNull: true,
        type: 'TIMESTAMP(6)',
      },
      responseTimestamp: {
        allowNull: true,
        type: 'TIMESTAMP(6)',
      },
      request: {
        type: Sequelize.TEXT('long')
      },
      response: {
        type: Sequelize.TEXT('long')
      },
      createdAt: {
        type: 'TIMESTAMP(6)',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(6)')
      },
      updatedAt: {
        type: 'TIMESTAMP(6)',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('logs');
  }
};