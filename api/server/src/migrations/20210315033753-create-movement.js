'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Movements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      agentId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references:{
          model: 'Agents',
          key: 'id',
          as: 'agentId',
        }
      },
      type: {
        type: Sequelize.STRING
      },
      time: {
        type: Sequelize.DATE
      },
      visitorType: {
        type: Sequelize.STRING
      },
      requestId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references:{
          model: 'Requests',
          key: 'id',
          as: 'requestId',
        }
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Movements');
  }
};