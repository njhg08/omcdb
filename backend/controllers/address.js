const pool = require('../config/db')
const addressQueries = require('./address.queries')

exports.getMunicipalities = async (req, res) => {
    try {
        const municipalities = await pool.query(addressQueries.FETCH_ALL_MUNICIPALITIES)
        res.json(municipalities.rows)
    } catch (error) {
        console.error(error.message)
    }
   
}

exports.getBarangays = async (req, res) => {
    try {
        const barangays = await pool.query(addressQueries.FETCH_ALL_BARANGAYS)
        res.json(barangays.rows)
    } catch (error) {
        console.error(error.message)
    }
}

exports.getBarangayGivenMunicipality = async (req, res) => {
    try {
        const {municipalityId} = req.params
        const barangays = await pool.query(`${addressQueries.FETCH_ALL_BARANGAYS_FROM_MUNICIPALITY} ${municipalityId}`)
        res.json(barangays.rows)
    } catch (error) {
        console.error(error.message)
    }
}