const express = require('express')
const authController = require('../../controllers/authController')

const server = express()


server.post('/signup', authController.createUser)
server.post('/login', authController.loginUser)

module.exports = server