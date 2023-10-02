'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaksi.belongsTo(models.User, {
        foreignKey: 'user_id'
      })

      Transaksi.belongsTo(models.Produk, {
        foreignKey: 'produk_id'
      })
    }
  }
  Transaksi.init({
    tanggal: DataTypes.DATE,
    wilayah: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    produk_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Transaksi',
  });
  return Transaksi;
};