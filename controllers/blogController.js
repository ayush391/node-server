const { ObjectId } = require('mongodb')
const { default: mongoose } = require('mongoose')
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
const editBlog = async (req, res) => {
    try {
        const newBlog = await BlogModel.findByIdAndUpdate(
            new mongoose.Types.ObjectId(req.params.blogid),
            { ...req.body }
        )
        res.status(200).json(newBlog)
    }
    catch (err) {
        return res.status(500).send({ error: err.message })
    }
}
const removeBlog = async (req, res) => {
    try {
        const response = await BlogModel.findByIdAndDelete(new mongoose.Types.ObjectId(req.params.blogid))
        res.status(200).json(response)
    }
    catch (err) {
        return res.status(500).send({ error: err.message })
    }
}

const fetchBlog = async (req, res) => {
    try {
        const blog = await BlogModel.findById(new mongoose.Types.ObjectId(req.params.blogid))
        res.status(200).json(blog)
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
        const blogs = await BlogModel.find({}, { blogDesc: 0 })
        res.status(200).json(blogs)
    }
    catch (err) {
        return res.status(500).send({ error: err.message })
    }
}

module.exports = { createBlog, userBlogs, fetchAllBlogs, fetchBlog, editBlog, removeBlog }