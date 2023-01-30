const UserModel = require("../models/user")

const findUser = async (req, res, next) => {
    try {
        const data = await UserModel.find({ id: req.params.userid })
        if (data.length) {
            next()
            return
        }

        res.status(404).send('user does not exist')

    }
    catch (err) {
        res.status(500).send(err.message)
    }
}

module.exports = findUser