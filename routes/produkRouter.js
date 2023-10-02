const express = require('express')
const ProdukController = require('../controllers/produkController')

const router = express.Router()

router.get('/produks', ProdukController.findAll)

module.exports = router