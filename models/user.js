const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    'id': {
        type: String,
        required: true,
    },
    'dp': {
        type: String,
        // required: true,
    },
    'name': {
        type: String,
        // required: true,
    },
    'dob': {
        type: Date,
        default: Date.now
        // required: true,
    },
    'password': {
        type: String,
        required: true,
    },
    'createdAt': {
        type: Date,
        required: true,
        default: Date.now,
    },
})

const UserModel = mongoose.model('User', UserSchema)

UserModel.createIndexes()

module.exports = UserModel