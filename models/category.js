const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CategorySchema = new Schema({
    'name': {
        type: String,
        required: true,
    },
    'createdAt': {
        type: Date,
        required: true,
        default: Date.now,
    },
})

const CategoryModel = mongoose.model('Category', CategorySchema)

CategoryModel.createIndexes()

module.exports = CategoryModel