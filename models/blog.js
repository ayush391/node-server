const mongoose = require('mongoose')

const Schema = mongoose.Schema

const BlogSchema = new Schema({
    'userId': String,
    'blogTitle': String,
    'blogSummary': String,
    'blogDesc': String,
    'blogImg': {
        type: String,
    },
    'createdAt': {
        type: Date,
        required: true,
        default: Date.now,
    },
})

const BlogModel = mongoose.model('blog', BlogSchema)

module.exports = BlogModel
