const pool = require('../config/db');
const farmsQueries = require('./farms.queries');
const practicesQueries = require('./practices.queries')


exports.getPractices = async(req, res) => {
    try {
        const practices = await pool.query(practicesQueries.FETCH_ALL_PRACTICES)
        res.json(practices.rows)
    } catch (error) {
        res.status(500).json({error: `${error.message}`})
    }
}

exports.addPractice = async(req, res) => {
    try {
        const {farming_practice, practiceDescription} = req.body
        const newPractice = await pool.query(practicesQueries.ADD_NEW_PRACTICE,[farming_practice, practiceDescription])
        
        const farms = await pool.query(farmsQueries.FETCH_ALL_FARMS)

        farms.rows.map(async(farm) => {
            await pool.query(farmsQueries.ADD_FARM_FARM_PRACTICES_DETAILS,[farm.id, newPractice.rows[0].id])
        })

        res.status(200).json({message: 'Added successfully'})
    } catch (error) {
        res.status(500).json({error: `${error.message}`})
    }
}


