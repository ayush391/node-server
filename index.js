require('dotenv').config()
const connectDatabase = require('./helpers/db.js')
const express = require('express')
const cors = require('cors');
const router = require('./routes/routes.js')

connectDatabase(process.env.DB_URI)

const server = new express()


server.use(cors({
    origin: process.env.FRONT_END_URL
}))
server.use(express.json());
server.use(router);


server.listen(process.env.PORT, () => {
    console.log(`Server started at ${process.env.BASE_URL}:${process.env.PORT}`)
})

