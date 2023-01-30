const express = require('express')
const authController = require('../../controllers/authController')
const fetchUser = require('../../middlewares/fetchuser')

const server = express()


server.post('/signup', authController.createUser)
server.post('/login', authController.loginUser)
server.get('/getuser', authController.getUser)
server.put('/edituser/', fetchUser, authController.getUserInfo)
server.get('/getuserinfo/:userid', authController.getUserInfo)

module.exports = server