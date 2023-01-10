const express = require('express')
const { bakris, home } = require('../controllers/bakriController')

const router = express.Router()

router.get('/', home)

router.get('/bakris/:count?', bakris)



module.exports = router