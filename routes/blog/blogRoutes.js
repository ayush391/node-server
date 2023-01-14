const express = require('express')
const blogController = require('../../controllers/blogController')
const fetchUser = require('../../middlewares/fetchuser')

const server = express()


server.post('/create', fetchUser, blogController.createBlog)


module.exports = server