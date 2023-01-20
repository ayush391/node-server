const express = require('express')
const authController = require('../../controllers/authController')

const server = express()


server.post('/signup', authController.createUser)
server.post('/login', authController.loginUser)
server.get('/getuser', authController.getUser)

module.exports = server