const mongoose = require('mongoose')

const Schema = mongoose.Schema

const BlogSchema = new Schema({
    'blogId': String,
    'blogTitle': String,
    'blogDesc': String,
})

const BlogModel = mongoose.model('BlogModel', BlogSchema)

module.exports = BlogModel
