const pool = require('../config/db');
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
        const {pest, description} = req.body
        await pool.query(pestQueries.ADD_NEW_PEST,[pest, description])
        
        res.status(200).json({message: 'Added successfully'})
    } catch (error) {
        res.status(500).json({error: `${error.message}`})
    }
}


