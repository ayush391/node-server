require('dotenv').config()
const connectDatabase = require('./helpers/db.js')
const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/routes.js')

connectDatabase(process.env.DB_URI)

const server = new express()


server.use(cors())
server.use(express.json({ limit: '50mb' }))
server.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
server.use(router);


server.listen(process.env.PORT, () => {
    console.log(`Server started at ${process.env.BASE_URL}:${process.env.PORT}`)
})

