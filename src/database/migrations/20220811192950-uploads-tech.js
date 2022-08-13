'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('uploads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      relative_path: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      file_name: { 
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      posts_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: 'posts', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      activities_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: 'activities', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('uploads')
  }
};
