const express = require('express')
const TransaksiController = require('../controllers/transaksiController')

const router = express.Router()

router.get('/transaksis', TransaksiController.findAll)
router.get('/transaksis/:id', TransaksiController.findbyId)
router.post('/transaksis/:userId/:produkId', TransaksiController.create)
router.delete('/transaksis/:id', TransaksiController.delete)

module.exports = router