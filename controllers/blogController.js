const BlogModel = require('../models/blog')

const createBlog = async (req, res) => {
    const newBlog = await BlogModel.create({
        'blogTitle': req.body.blogTitle,
        'blogDesc': req.body.blogDesc,
    })

    await newBlog.save()
    res.status(200).json(newBlog)
}

module.exports = { createBlog }