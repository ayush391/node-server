const express = require('express')
const blogController = require('../../controllers/blogController')

const server = express()


server.post('/create', blogController.createBlog)


module.exports = server