const express = require('express')
const {check} = require('express-validator')
const router = express.Router()
const AuthController = require('../controllers/auth.controller')

router.route("/register").post(
    [
        check('email', 'Incorrect mail!').isEmail(),
        check('password', 'Incorrect password! Minimum length 6 characters')
            .isLength({min: 6})
    ],
    AuthController.registerUser
)

router.route("/login").post(
    [
        check('email', 'Enter correct email!').normalizeEmail().isEmail(),
        check('password', 'Enter correct password!').exists()
    ],
    AuthController.authUser
)

module.exports = router
