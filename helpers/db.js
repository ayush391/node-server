const db = require('mongoose')

const connectDatabase = (dbURI) => {
    db.set('strictQuery', true)
    db.connect(dbURI, () => {
        console.log('Connected to database successfully')
    })
}

module.exports = connectDatabase