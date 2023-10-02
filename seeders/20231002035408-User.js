'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Users', [
      {
       username: 'nama',
       email: 'nama1@gmail.com',
       password: 'nama1',
       createdAt: new Date(),
        updatedAt: new Date(),
     },
     {
      username: 'nama2',
      email: 'nama2@gmail.com',
      password: 'nama2',
      createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
      username: 'nama3',
      email: 'nama3@gmail.com',
      password: 'nama3',
      createdAt: new Date(),
        updatedAt: new Date(),
    },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('User', null, {});

  }
};
