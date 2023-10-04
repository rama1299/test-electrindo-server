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

    static async findbyId(req, res, next) {
        try {
            const {id} = req.params
            const data = await Produk.findOne({
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

    static async create(req, res, next) {
        try{
            const {name, harga} = req.body
            if(!name || !harga) {
                return res.status(400).json({message: 'Incomplete data!'})
            }

            const existingName = await Produk.findOne({
                where: {name}
            })
            if(existingName) {
                return res.status(400).json({message: 'Name already exist!'})
            }

            const newProduk = await Produk.create({
                name,
                harga
            })
            if(!newProduk) {
                return res.status(400).json({message: 'Failed create produk!'})
            }

            res.status(200).json({message: 'Create produk successfully!', newProduk})
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: 'internal server error!'})
        }
    }

    static async delete(req, res, next) {
        try {
            const {id} = req.params

            const produkDelete = await Produk.destroy({
                where: {id}
            })
            if(!produkDelete) {
                res.status(400).json({message: 'Failed delete produk!'})
            }

            res.status(200).json({message: 'Delete produk successful!'})
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: 'internal server error!'})
        }
    }
}

module.exports = ProdukController