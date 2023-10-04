require('dotenv').config()
const {User} = require('../models')
const cookie = require('cookie')
const bcrypt = require('bcrypt')

class UserController {
    static async findAll(req, res, next) {
        try {
            const data = await User.findAll()

            if(!data[0]) {
                return res.status(400).json({message: 'data not found!'})
            }

            res.status(200).json({data})
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: 'internal server error!'})
        }
    }

    static async findbyId(req, res, next) {
        try {
            const {id} = req.params
            const data = await User.findOne({
                where: {id}
            })

            if(!data) {
                return res.status(400).json({message: 'data not found!'})
            }

            res.status(200).json({data})
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: 'internal server error!'})
        }
    }

    static async register(req, res, next) {
        try{
            const {username, email, password} = req.body

            const existingEmail = await User.findOne({
                where: {email}
            })
            if(existingEmail) {
                return res.status(400).json({message: 'Email already exist!'})
            }

            const existingUsername = await User.findOne({
                where: {username}
            })
            if(existingUsername) {
                return res.status(400).json({message: 'Username already exist!'})
            }

            const saltRounds = 10
            const hashPassword = await bcrypt.hash(password, saltRounds);
            if(!hashPassword) {
                return res.status(400).json({message: 'Internal server error!'})
            }

            const newUser = await User.create({
                username,
                email,
                password: hashPassword
            })


            res.status(200).json({message: 'Register successfully!'})
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: 'internal server error!'})
        }
    }


    static async login(req, res, next) {
        try {
            const {email, password} = req.body

            const user = await User.findOne({
                where: {email}
            })
            if (!user) {
                res.status(400).json({ message: 'Invalid email or password.' });
                return
            }
    
            const comparePassword = await bcrypt.compare(password, user.password);
    
            if (!comparePassword) {
                res.status(400).json({ message: 'Invalid email or password.' });
                return
            }

            const userData = {
                id: user.id
            }

            const cookieOptions = {
                maxAge: 60 * 60 * 1000,
                httpOnly: true
            }

            const tokenCookie = cookie.serialize('userData', userData, cookieOptions)

            res.setHeader('Set-Cookie', tokenCookie)
            res.status(200).json({message: 'Login successfully!'})
        } catch (error) {
            console.log(error)
            res.status(500).json({message: 'internal server error!'})
            return
        }
    }

    static async delete(req, res, next) {
        try {
            const {id} = req.params

            const userDelete = await User.destroy({
                where: {id}
            })
            if(!userDelete) {
                res.status(400).json({message: 'Failed delete user!'})
            }

            res.status(200).json({message: 'Delete user successful!'})
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: 'internal server error!'})
        }
    }
}

module.exports = UserController