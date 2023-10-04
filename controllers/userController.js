require('dotenv').config()
const {User} = require('../models')
const cookie = require('cookie')
const bcrypt = require('bcrypt')

class UserController {
    static async findAll(req, res, next) {
        try {
            const data = await User.findAll()

            if(!data[0]) {
                throw ({name: 'DataNotFound'})
            }

            res.status(200).json({data})
        } catch (error) {
            next(error)
        }
    }

    static async findbyId(req, res, next) {
        try {
            const {id} = req.params
            const data = await User.findOne({
                where: {id}
            })

            if(!data) {
                throw ({name: 'DataNotFound'})
            }

            res.status(200).json({data})
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    static async register(req, res, next) {
        try{
            const {username, email, password} = req.body

            const existingEmail = await User.findOne({
                where: {email}
            })
            if(existingEmail) {
                throw ({name: 'EmailAlreadyExists'})
            }

            const existingUsername = await User.findOne({
                where: {username}
            })
            if(existingUsername) {
                throw ({name: 'UsernameAlreadyExists'})
            }

            const saltRounds = 10
            const hashPassword = await bcrypt.hash(password, saltRounds);
            if(!hashPassword) {
                next(error)
            }

            const newUser = await User.create({
                username,
                email,
                password: hashPassword
            })


            res.status(200).json({message: 'Register successfully!'})
        } catch (error) {
            console.log(error)
            next(error)
        }
    }


    static async login(req, res, next) {
        try {
            const {email, password} = req.body

            const user = await User.findOne({
                where: {email}
            })
            if (!user) {
                throw ({name: 'IncorrectEmailOrPassword'})
            }
    
            const comparePassword = await bcrypt.compare(password, user.password);
    
            if (!comparePassword) {
                throw ({name: 'IncorrectEmailOrPassword'})
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
            next(error)
        }
    }

    static async delete(req, res, next) {
        try {
            const {id} = req.params

            const userDelete = await User.destroy({
                where: {id}
            })
            if(!userDelete) {
                throw ({name: 'DeleteFailed'})
            }

            res.status(200).json({message: 'Delete user successful!'})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController