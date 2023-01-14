require('dotenv').config()
const UserModel = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const createUser = async (req, res) => {
    const id = req.body.id
    let password = req.body.password

    try {


        let user = await UserModel.findOne({ id })

        if (!user) {
            const salt = await bcrypt.genSalt(10)
            password = await bcrypt.hash(password, salt)
            user = await UserModel.create({ id, password })
            const response = await user.save()
            return res.status(200).send('User created successfully')
        }

        return res.status(400).send('User already exists')

    }
    catch (err) {
        return res.status(500).send({ error: err.message })
    }
}

const loginUser = async (req, res) => {
    const id = req.body.id
    const password = req.body.password
    try {

        let user = await UserModel.findOne({ id })

        if (user) {
            // const salt = await bcrypt.genSalt(10)
            let check = await bcrypt.compare(password, user.password)
            if (check) {

                let token = jwt.sign({ id }, process.env.JWT_SIGN)

                return res.status(200).json(token)
            }
        }

        return res.status(400).send('User or password is incorrect')
    }
    catch (err) {
        return res.status(500).send({ error: err.message })
    }

}

module.exports = { createUser, loginUser }