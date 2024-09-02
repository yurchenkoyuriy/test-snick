const express = require('express')
const router = express.Router()

const GenerateController = require('../controllers/generate.controller')

router.route("/template").post(GenerateController.getTemplate)
router.route("/run").post(GenerateController.init)

module.exports = router