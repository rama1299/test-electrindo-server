'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Produks', [
      {
       name: 'nama',
       harga: '5000',
       createdAt: new Date(),
        updatedAt: new Date(),
     },
     {
      name: 'nama2',
      harga: '6000',
      createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
      name: 'nama3',
      harga: '7000',
      createdAt: new Date(),
        updatedAt: new Date(),
    },
    ], {});
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Produk', null, {});

  }
};
