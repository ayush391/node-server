const mongoose = require('mongoose')

const Schema = mongoose.Schema

const BlogSchema = new Schema({
    'userId': String,
    'blogTitle': String,
    'blogDesc': String,
})

const BlogModel = mongoose.model('blog', BlogSchema)

module.exports = BlogModel
