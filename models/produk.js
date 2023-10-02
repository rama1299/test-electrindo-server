'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Produk.hasMany(models.Transaksi, {
        foreignKey: 'produk_id'
      })
    }
  }
  Produk.init({
    name: DataTypes.STRING,
    harga: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Produk',
  });
  return Produk;
};