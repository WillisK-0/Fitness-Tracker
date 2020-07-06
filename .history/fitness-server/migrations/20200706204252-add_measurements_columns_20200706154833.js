'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Users',
      'height'
    ),
    queryInterface.addColumn(
      'Users',
      'feet',
      Sequelize.INTEGER
    ),
    queryInterface.addColumn(
      'Users',
      'inches',
      Sequelize.INTEGER
    )
  },


  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Users',
      'height',
      Sequelize.STRING
    ),
    queryInterface.removeColumn(
      'Users',
      'feet'
    ),
    queryInterface.removeColumn(
      'Users',
      'inches'
    )
  }
};
