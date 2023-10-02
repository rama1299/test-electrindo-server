const deretBilanganPrima = require("../helpers/prima")

class PrimaController {
    static async login(req, res, next) {
        try {
            const {number} = req.body
            const data = await deretBilanganPrima(number)
            
            res.status(200).json({data})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = PrimaController