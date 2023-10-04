const {Transaksi, User, Produk} = require('../models')

class TransaksiController {
    static async findAll(req, res, next){
        try {
            const data = await Transaksi.findAll({
                include: [
                    {
                        model: User,
                    },
                    {
                        model: Produk,
                    },
                ],
            })

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
            const data = await Transaksi.findOne({
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
            let {tanggal, wilayah} = req.body
            const {userId, produkId} = req.params
            if(!wilayah) {
                return res.status(400).json({message: 'Incomplete data!'})
            }

            if(!tanggal|| tanggal === null || tanggal === undefined) {
                tanggal = new Date()
            }

            const newTransaksi = await Transaksi.create({
                tanggal,
                wilayah,
                user_id : userId,
                produk_id : produkId
            })
            if(!newTransaksi) {
                return res.status(400).json({message: 'Failed create transaksi!'})
            }

            res.status(200).json({message: 'Create transaksi successfully!', newTransaksi})
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: 'internal server error!'})
        }
    }

    static async delete(req, res, next) {
        try {
            const {id} = req.params

            const transaksiDelete = await Transaksi.destroy({
                where: {id}
            })
            if(!transaksiDelete) {
                res.status(400).json({message: 'Failed delete Transaksi!'})
            }

            res.status(200).json({message: 'Delete transaksi successful!'})
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: 'internal server error!'})
        }
    }
}

module.exports = TransaksiController