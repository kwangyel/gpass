'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Agents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      idNumber: {
        type: Sequelize.STRING
      },
      agencyId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references:{
          model: 'Agencies',
          key: 'id',
          as: 'agencyId',
        }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Agents');
  }
};