const express = require('express')
const UserController = require('../controllers/userController')

const router = express.Router()

router.get('/users', UserController.findAll)
router.get('/users/:id', UserController.findbyId)
router.post('/users/register', UserController.register)
router.post('/users/login', UserController.login)
router.delete('/users/:id', UserController.delete)


module.exports = router