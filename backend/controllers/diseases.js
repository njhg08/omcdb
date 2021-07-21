const pool = require('../config/db');
const diseasesQueries = require('./diseases.queries');
const farmsQueries = require('./farms.queries');


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
        const newDisease = await pool.query(diseasesQueries.ADD_NEW_DISEASE,[disease, diseaseDescription])
        
        const farms = await pool.query(farmsQueries.FETCH_ALL_FARMS)

        farms.rows.map(async(farm) => {
            await pool.query(farmsQueries.ADD_FARM_DISEASES_DETAILS,[farm.id, newDisease.rows[0].id])
        })

        res.status(200).json({message: 'Added successfully'})
    } catch (error) {
        res.status(500).json({error: `${error.message}`})
    }
}


