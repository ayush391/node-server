const express = require('express')
const userRoutes = require('../routes/user/userRoutes')
const blogRoutes = require('../routes/blog/blogRoutes')
const categoryRoutes = require('../routes/category/categoryRoutes')

const router = express()

router.use('/user', userRoutes)
router.use('/blog', blogRoutes)
router.use('/category', categoryRoutes)


module.exports = router