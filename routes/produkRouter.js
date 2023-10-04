const express = require('express')
const ProdukController = require('../controllers/produkController')

const router = express.Router()

router.get('/produks', ProdukController.findAll)
router.get('/produks/:userId/produkId', ProdukController.findbyId)
router.post('/produks/:userId/:produkId', ProdukController.create)
router.delete('/produks/:id', ProdukController.delete)

module.exports = router