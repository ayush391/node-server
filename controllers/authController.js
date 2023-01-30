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
            await user.save()
            return res.status(200).send('User created successfully')
        }

        return res.status(400).send('User already exists')

    }
    catch (err) {
        return res.status(500).send({ error: err.message })
    }
}

const editUser = async (req, res) => {
    const userid = req.id

    try {


        let user = await UserModel.find({ id: userid })

        if (user.length) {
            const { id, password, data } = req.body
            console.log(data)
            if (password.length) {
                const salt = await bcrypt.genSalt(10)
                const newPassword = await bcrypt.hash(password, salt)
                data = { ...data, password: newPassword }
            }
            const result = await UserModel.updateOne({ ...data })
            return res.status(200).json(result)
        }

        return res.status(400).send('User does not exists')

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
            let check = await bcrypt.compare(password, user.password)

            if (check) {

                let token = jwt.sign({ id }, process.env.JWT_SIGN, { expiresIn: '3h' })

                const { _id, password, ...userInfo } = user['_doc']

                return res.status(200).json({ token: token, user: userInfo })
            }
        }

        return res.status(404).send('User or password is incorrect')
    }
    catch (err) {
        return res.status(500).send({ error: err.message })
    }
}
const getUser = async (req, res) => {
    const token = req.headers['auth-token']
    try {

        let userId = jwt.verify(token, process.env.JWT_SIGN)

        let user = await UserModel.findOne({ id: userId.id })

        if (user) {

            const { _id, password, ...userInfo } = user['_doc']

            return res.status(200).json({ token: token, user: userInfo })
        }

        return res.status(400).send('User or password is incorrect')
    }
    catch (err) {
        return res.status(500).send({ error: err.message })
    }

}

const getUserInfo = async (req, res) => {
    try {
        const user = await UserModel.find({ id: req.params.userid })
        if (user.length) {
            res.status(200).json(user[0])
            return
        }
        res.status(404).send('user does not exist')
    }
    catch (err) {
        res.status(500).send(err.message)
    }
}

module.exports = { createUser, loginUser, getUser, getUserInfo }