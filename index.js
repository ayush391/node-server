require('dotenv').config()
const express = require('express')
const connectDatabase = require('./db.js')

const server = new express()

server.get('/home', (req, res) => {
    res.send('helloworld')
})

connectDatabase(process.env.DB_URI)

server.listen(process.env.PORT, () => {
    console.log(`Server started at ${process.env.BASE_URL}:${process.env.PORT}`)
})

