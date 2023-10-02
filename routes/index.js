const express = require('express')
const userRouter = require('./userRouter')
const produkRouter = require('./produkRouter')
const transaksiRouter = require('./transaksiRouter')

const router = express.Router()

router.use(userRouter)
router.use(produkRouter)
router.use(transaksiRouter)


module.exports = router