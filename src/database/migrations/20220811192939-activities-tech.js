'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('activities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      value: {
        allowNull: false,
        autoIncrement: false,
        type: Sequelize.DataTypes.INTEGER
      },
      description: { 
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      due_date: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('activities');
  }
};
