const express = require('express')
const UserController = require('../controllers/userController')

const router = express.Router()

router.get('/users', UserController.findAll)
router.post('/users', UserController.login)


module.exports = router