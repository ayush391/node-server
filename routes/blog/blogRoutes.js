const express = require('express')
const blogController = require('../../controllers/blogController')
const fetchUser = require('../../middlewares/fetchuser')
const findUser = require('../../middlewares/findUser')

const server = express()


server.post('/create', fetchUser, blogController.createBlog)
server.put('/edit/:blogid', fetchUser, blogController.editBlog)
server.get('/fetchall', blogController.fetchAllBlogs)
server.get('/userid/:userid', blogController.userBlogs)
server.get('/blogid/:blogid', blogController.fetchBlog)
server.delete('/remove/:blogid', fetchUser, blogController.removeBlog)


module.exports = server