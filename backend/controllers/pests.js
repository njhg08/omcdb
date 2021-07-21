const pool = require('../config/db');
const farmsQueries = require('./farms.queries');
const pestQueries = require('./pests.queries')


exports.getPests = async(req, res) => {
    try {
        const pests = await pool.query(pestQueries.FETCH_ALL_PESTS)
        res.json(pests.rows)
    } catch (error) {
        res.status(500).json({error: `${error.message}`})
    }
}

exports.addPest = async(req, res) => {
    try {
        const {pest, pestDescription} = req.body
        const newPest = await pool.query(pestQueries.ADD_NEW_PEST,[pest, pestDescription])
        
        const farms = await pool.query(farmsQueries.FETCH_ALL_FARMS)

        farms.rows.map(async(farm) => {
            await pool.query(farmsQueries.ADD_FARM_PESTS_DETAILS,[farm.id, newPest.rows[0].id])
        })

        res.status(200).json({message: 'Added successfully'})
    } catch (error) {
        res.status(500).json({error: `${error.message}`})
    }
}


