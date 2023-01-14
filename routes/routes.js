const express = require('express')
const userRoutes = require('../routes/user/userRoutes')
const blogRoutes = require('../routes/blog/blogRoutes')

const router = express()

router.use('/user', userRoutes)
router.use('/blog', blogRoutes)


module.exports = router