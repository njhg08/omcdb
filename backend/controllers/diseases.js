const pool = require('../config/db');
const diseasesQueries = require('./diseases.queries')


exports.getDiseases = async(req, res) => {
    try {
        const diseases = await pool.query(diseasesQueries.FETCH_ALL_DISEASES)
        res.json(diseases.rows)
    } catch (error) {
        res.status(500).json({error: `${error.message}`})
    }
}

exports.addDisease = async(req, res) => {
    try {
        const {disease, diseaseDescription} = req.body
        await pool.query(diseasesQueries.ADD_NEW_DISEASE,[disease, diseaseDescription])
        
        res.status(200).json({message: 'Added successfully'})
    } catch (error) {
        res.status(500).json({error: `${error.message}`})
    }
}


