'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('restaurant', 'user_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('restaurant', 'user_id');
  },
};
