const {validationResult} = require("express-validator")
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const User = require('../models/User')


exports.registerUser = async(req, res) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect data during registration'
            })
        }

        const {email, password} = req.body

        const candidate = await User.findOne({email})

        if (candidate) {
            return res.status(400).json({message: 'Such user already exists'})
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({email: email, password: hashedPassword})

        await user.save()

        res.status(201).json({message: 'User successfully created!'})

    } catch (e) {
        res.status(500).json({message: 'Something went wrong. Try again!'})
    }
}

exports.authUser = async(req, res) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect data during login'
            })
        }

        const {email, password} = req.body

        const user = await User.findOne({email})

        if (!user) {
            return res.status(400).json({message: 'User is not found!'})
        }

        const isMath = await bcrypt.compare(password, user.password)

        if (!isMath) {
            return res.status(400).json({message: 'Invalid password\n!'})
        }

        const token = jwt.sign(
            {userId: user.id},
            config.get('jwtSecret'),
            {expiresIn: '1h'}
        )

        res.json({token, userId: user.id})

    } catch (e) {
        res.status(500).json({message: 'Something went wrong. Try again!'})
    }
}