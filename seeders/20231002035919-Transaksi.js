'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Transaksis', [
      {
       tanggal: new Date(),
       wilayah: 'jakarta',
       user_id: 1,
       produk_id: 1,
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
      tanggal: new Date(),
      wilayah: 'jakarta',
      user_id: 1,
      produk_id: 2,
      createdAt: new Date(),
     updatedAt: new Date(),
    },
    {
      tanggal: new Date(),
      wilayah: 'jakarta',
      user_id: 1,
      produk_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Transaksi', null, {});

  }
};
