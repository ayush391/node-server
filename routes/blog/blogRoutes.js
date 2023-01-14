const express = require('express')
const blogController = require('../../controllers/blogController')
const fetchUser = require('../../middlewares/fetchuser')

const server = express()


server.post('/create', fetchUser, blogController.createBlog)
server.get('/:userid', blogController.fetchAllBlogs)


module.exports = server