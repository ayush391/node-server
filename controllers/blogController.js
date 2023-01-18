const BlogModel = require('../models/blog')

const createBlog = async (req, res) => {
    try {
        const newBlog = await BlogModel.create({
            'userId': req.id,
            'blogTitle': req.body.blogTitle,
            'blogImg': req.body.blogImg,
            'blogDesc': req.body.blogDesc,
        })

        await newBlog.save()
        res.status(200).json(newBlog)
    }
    catch (err) {
        return res.status(500).send({ error: err.message })
    }
}

const fetchBlog = async (req, res) => {
    try {
        const blogs = await BlogModel.find({ '_id': req.params.blogid })
        res.status(200).json(blogs)
    }
    catch (err) {
        return res.status(500).send({ error: err.message })
    }
}
const userBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.find({ userId: req.params.userid })
        res.status(200).json(blogs)
    }
    catch (err) {
        return res.status(500).send({ error: err.message })
    }
}

const fetchAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.find()
        res.status(200).json(blogs)
    }
    catch (err) {
        return res.status(500).send({ error: err.message })
    }
}

module.exports = { createBlog, userBlogs, fetchAllBlogs, fetchBlog }