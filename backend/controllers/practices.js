const pool = require('../config/db');
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
        const {farming_practice, description} = req.body
        await pool.query(practicesQueries.ADD_NEW_PRACTICE,[farming_practice, description])
        
        res.status(200).json({message: 'Added successfully'})
    } catch (error) {
        res.status(500).json({error: `${error.message}`})
    }
}


