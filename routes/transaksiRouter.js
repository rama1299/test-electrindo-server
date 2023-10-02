const express = require('express')
const TransaksiController = require('../controllers/transaksiController')

const router = express.Router()

router.get('/transaksis', TransaksiController.findAll)

module.exports = router