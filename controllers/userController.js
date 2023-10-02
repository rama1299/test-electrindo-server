require('dotenv').config()
const {User} = require('../models')
const cookie = require('cookie')

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


    static async login(req, res, next) {
        try {
            const {email, password} = req.body

            const user = await User.findOne({
                where: {email}
            })
            if(!user) {
                return res.status(400).json({message: 'InvalidCredentials'})
            }

            if(password != user.password) {
                return res.status(400).json({message: 'InvalidCredentials'})
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
            next(error)
        }
    }
}

module.exports = UserController