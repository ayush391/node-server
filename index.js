require('dotenv').config()
const express = require('express')
const connectDatabase = require('./helpers/db.js')
const router = require('./routes/routes.js')

const server = new express()

// connectDatabase(process.env.DB_URI)

server.use(router);

server.listen(process.env.PORT, () => {
    console.log(`Server started at ${process.env.BASE_URL}:${process.env.PORT}`)
})

