const pool = require('../config/db');
const statisticsQueries = require('./statistics.queries')



exports.getTotalFarmerCount = async(req, res) => {
    try {
        const totalFarmers = await pool.query(statisticsQueries.GET_TOTAL_FARMERS)
        res.json(totalFarmers.rows)
    } catch (error) {
        res.status(500).json({error: `${error.message}`})
    }
}

exports.getTotalFarmerCountBySexGivenId = async(req, res) => {
    try {
        const {id} = req.params
        const totalFarmers = await pool.query(statisticsQueries.GET_TOTAL_FARMERS_BY_SEX, [id])
        Number(id) ===1 ? res.json({male: totalFarmers.rows[0].count}) : Number(id) === 2 ? res.json({female: totalFarmers.rows[0].count}) : res.status(400).json({msg: 'Invalid data'})
    } catch (error) {
        res.status(500).json({error: `${error.message}`})
    }
}

exports.getTotalFarmerCountBySex = async(req, res) => {
    try {
        const totalMaleFarmers = await pool.query(statisticsQueries.GET_TOTAL_FARMERS_BY_SEX, [1])
        const totalFemaleFarmers = await pool.query(statisticsQueries.GET_TOTAL_FARMERS_BY_SEX, [2])
        res.json({male_farmers: totalMaleFarmers.rows[0].count, female_farmers: totalFemaleFarmers.rows[0].count})
    } catch (error) {
        res.status(500).json({error: `${error.message}`})
    }
}

exports.getTotalFarmerCountByAgeClass = async(req, res) => {
    try {
        const totalMaleFarmers = await pool.query(statisticsQueries.GET_TOTAL_FARMERS_BY_SEX, [1])
        const totalFemaleFarmers = await pool.query(statisticsQueries.GET_TOTAL_FARMERS_BY_SEX, [2])
        res.json({male_farmers: totalMaleFarmers.rows[0].count, female_farmers: totalFemaleFarmers.rows[0].count})
    } catch (error) {
        res.status(500).json({error: `${error.message}`})
    }
}


