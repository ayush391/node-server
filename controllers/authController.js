const axios = require('axios')
const UserModel = require('../models/user')

const createUser = async (req, res) => {
    const id = req.body.id
    const password = req.body.password

    const user = await UserModel.create({ id, password })
    const response = user.save()

    res.status(200).json(user)
}

module.exports = createUser