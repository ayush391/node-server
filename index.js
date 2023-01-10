const express = require('express')

const server = new express()

server.listen(3000, () => {
    console.log('server started')
})