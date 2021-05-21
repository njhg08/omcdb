const pool = require('../config/db')
const farmersQueries = require('./farmers.queries')

exports.getFarmers = async (req, res) => {
    try {
        const farmers = await pool.query(farmersQueries.FETCH_ALL_FARMERS)
        res.json(farmers.rows)
    } catch (error) {
        console.error(error.message)
    }
   
}
