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

exports.updateFarmerDetails = async(req, res) => {
    try {
        const {id} = req.params
        const farmer = await pool.query(farmersQueries.FETCH_FARMER_DETAILS, [id] )
        let {
            first_name,
            last_name,
            fk_sex,
            phone_number,
            fk_civil_status,
            fk_municipality,
            fk_barangay,
            age,
            farming_experience,
            fk_education,
            male_household,
            female_household,
            fk_financing
        } = farmer.rows[0]

        if(farmer.rows[0]) {
            first_name = req.body.first_name || first_name
            last_name = req.body.last_name || last_name
            fk_sex = req.body.fk_sex || fk_sex
            phone_number = req.body.phone_number || phone_number
            fk_civil_status = req.body.fk_civil_status || fk_civil_status
            fk_municipality = req.body.fk_municipality || fk_municipality
            fk_barangay = req.body.fk_barangay || fk_barangay
            age = req.body.age || age
            farming_experience = req.body.farming_experience ||farming_experience
            fk_education = req.body.fk_education || fk_education
            male_household = req.body.male_household || male_household
            female_household = req.body.female_household || female_household
            fk_financing = req.body.fk_financing || fk_financing

        const updatedFarmerDetails = await pool.query(farmersQueries.UPDATE_FARMER_DETAILS, 
                [
                    first_name,
                    last_name,
                    fk_sex,
                    phone_number,
                    fk_civil_status,
                    fk_municipality,
                    fk_barangay,
                    age,
                    farming_experience,
                    fk_education,
                    male_household,
                    female_household,
                    fk_financing,
                    id
                ])
            res.json({farmer: updatedFarmerDetails.rows[0], message: 'Farmer details updated successfully'})
        } else {
            res.status(400).json({error: 'Farmer not found'})
        }

        
        
    } catch (error) {
        res.status(500).json({error: `${error.message}`})
    }
}