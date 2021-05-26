const pool = require('../config/db')
const farmersQueries = require('./farmers.queries')

exports.getFarmers = async (req, res) => {
    try {
        const farmers = await pool.query(farmersQueries.FETCH_ALL_FARMERS)
        res.json(farmers.rows)
    } catch (error) {
        res.status(500).json({error: `${error.message}`})
    }
   
}

exports.addFarmer = async (req, res) => {
    try {
        const {firstName, lastName, sex, phoneNumber, civilStatus, municipality, barangay, age, farmingExperience, education, maleHousehold, femaleHousehold, financing} = req.body
        await pool.query(farmersQueries.ADD_NEW_FARMER, 
            [
                firstName, lastName,
                sex,
                phoneNumber,
                civilStatus,
                municipality,
                barangay,
                age,
                farmingExperience,
                education,
                maleHousehold,
                femaleHousehold,
                financing
            ])
        res.status(200).json({message: 'Added successfully'})
    } catch (error) {
       res.status(500).json({error: `${error.message}`})
    }
}

exports.getFarmer = async(req, res) => {
    try {
        const farmer = await pool.query(farmersQueries.FETCH_FARMER_DETAILS, [req.params.id] )
        
  
        if(farmer.rowCount > 0) {
            res.status(200).json(farmer.rows[0])
        } else {
            res.status(404).json({error: 'Farmer not found'})
        }
        
    } catch (error) {
        res.status(500).json({error: `${error.message}`})
    }
}