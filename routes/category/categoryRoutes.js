const express = require('express')
const { getAllCategories, createCategory } = require('../../controllers/categoryController')

const server = express()


server.get('/getall', getAllCategories)
server.post('/create', createCategory)

module.exports = server