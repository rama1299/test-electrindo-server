const {Produk} = require('../models')

class ProdukController {
    static async findAll(req, res, next){
        try {
            const data = await Produk.findAll()

            if(!data[0]) {
                return res.status(400).json({message: 'data not found!'})
            }

            res.status(200).json({data})
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: 'internal server error!'})
        }
    }
}

module.exports = ProdukController