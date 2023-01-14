require('dotenv').config()
const jwt = require('jsonwebtoken')

const fetchUser = (req, res, next) => {
    const token = req.header('auth-token')

    if (!token) {
        return res.status(400).send('please login first')
    }
    const data = jwt.verify(token, process.env.JWT_SIGN)
    req.id = data.id
    next()
}

module.exports = fetchUser