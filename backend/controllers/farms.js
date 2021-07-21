const pool = require('../config/db')
const farmsQueries = require('./farms.queries')
const pestQueries = require('./pests.queries')
const diseasesQueries = require('./diseases.queries')
const practicesQueries = require('./practices.queries')


exports.getFarms = async (req, res) => {
    try {
        const farms = await pool.query(farmsQueries.FETCH_ALL_FARMS)
        res.json(farms.rows)
    } catch (error) {
        res.status(500).json({error: `${error.message}`})
    }
   
}

exports.addFarm = async(req, res) => {
    try {
        const {longitude, latitude, farmer, farmArea, lessThanFive, fiveOrMore, peakSeason, offSeason, municipality, barangay, farmNotes  } = req.body

        const pests = await pool.query(pestQueries.FETCH_ALL_PESTS)
        const diseases = await pool.query(diseasesQueries.FETCH_ALL_DISEASES)
        const practices = await pool.query(practicesQueries.FETCH_ALL_PRACTICES)


        
        const newFarmId = await pool.query(farmsQueries.ADD_NEW_FARM, [longitude, latitude, farmer, farmArea, lessThanFive, fiveOrMore, peakSeason, offSeason, municipality, barangay, farmNotes])
        
        pests.rows.map(async(pest) => {
            await pool.query(farmsQueries.ADD_FARM_PESTS_DETAILS,[newFarmId.rows[0].id, pest.id])
        })

        diseases.rows.map(async(disease) => {
            await pool.query(farmsQueries.ADD_FARM_DISEASES_DETAILS,[newFarmId.rows[0].id, disease.id])
        })

        practices.rows.map(async(practice) => {
            await pool.query(farmsQueries.ADD_FARM_FARM_PRACTICES_DETAILS,[newFarmId.rows[0].id, practice.id])
        })

        
        res.status(200).json({message: 'Farm added successfully', farmId: newFarmId.rows[0]})
    } catch (error) {
        res.status(500).json({error: `${error.message}`})
    }
}

exports.getFarmerFarms = async (req, res) => {
    try {
        const farm = await pool.query(farmsQueries.FETCH_FARMER_FARMS, [req.params.farmerId])
        
        if(farm.rows.length > 0) {
            res.json(farm.rows)
        } else {
            res.status(404).json({error: 'This farmer has no farm in the database'})
        }
        
    } catch (error) {
        res.status(500).json({error: `${error.message}`})
    }
   
}

exports.getFarm = async (req, res) => {
    try {
        const farm = await pool.query(farmsQueries.FETCH_FARM, [req.params.id])
        
        if(farm.rowCount > 0) {
            res.status(200).json(farm.rows[0])
        } else {
            res.status(404).json({error: 'Farm not found'})
        }
    } catch (error) {
        res.status(500).json({error: `${error.message}`})
    }  
}

exports.getFarmPests = async (req, res) => {
    try {
        const farmPests = await pool.query(farmsQueries.FETCH_FARM_PESTS, [req.params.id])
        
        if(farmPests.rows.length > 0) {
            res.json(farmPests.rows)
        } else {
            res.status(404).json({error: 'Farm not found'})
        }
    } catch (error) {
        res.status(500).json({error: `${error.message}`})
    }
   
}

exports.updateFarmPest = async (req, res) => {
    try {
        const {id, newLevel} = req.body
        const updatedFarmPest = await pool.query(farmsQueries.UPDATE_FARM_PEST, [newLevel, id])
        
        res.status(200).json({message: 'Farm pest updated successfully'})

    } catch (error) {
        res.status(500).json({error: `${error.message}`})
    }
   
}

exports.getFarmDiseases = async (req, res) => {
    try {
        const farmDiseases = await pool.query(farmsQueries.FETCH_FARM_DISEASES, [req.params.id])
        
        if(farmDiseases.rows.length > 0) {
            res.json(farmDiseases.rows)
        } else {
            res.status(404).json({error: 'Farm not found'})
        }
    } catch (error) {
        res.status(500).json({error: `${error.message}`})
    }
   
}

exports.updateFarmDisease = async (req, res) => {
    try {
        const {id, newLevel} = req.body
        const updatedFarmDisease = await pool.query(farmsQueries.UPDATE_FARM_DISEASE, [newLevel, id])
        
        res.status(200).json({message: 'Farm disease updated successfully'})

    } catch (error) {
        res.status(500).json({error: `${error.message}`})
    }
}

exports.getFarmPractices = async (req, res) => {
    try {
        const farmPractices = await pool.query(farmsQueries.FETCH_FARM_PRACTICES, [req.params.id])
        
        if(farmPractices.rows.length > 0) {
            res.json(farmPractices.rows)
        } else {
            res.status(404).json({error: 'Farm not found'})
        }
    } catch (error) {
        res.status(500).json({error: `${error.message}`})
    }
   
}

exports.updateFarmPractice = async (req, res) => {
    try {
        const {id, newLevel} = req.body
        const updatedFarmPractice = await pool.query(farmsQueries.UPDATE_FARM_PRACTICE, [newLevel, id])
        
        res.status(200).json({message: 'Farm practice updated successfully', updatedFarmPractice: updatedFarmPractice.rows[0]})

    } catch (error) {
        res.status(500).json({error: `${error.message}`})
    }
}

exports.updateFarmDetails = async(req, res) => {
    try {
        const {id} = req.params
        const farm = await pool.query(farmsQueries.FETCH_FARM, [id] )
       
        
        if(farm.rows[0]) {
            let {
                longitude,
                latitude,
                fk_farmer,
                fk_municipality,
                fk_barangay,
                farm_area,
                less_than_five_years_trees,
                five_years_or_more_trees,
                peak_season_production,
                off_season_production,
                farm_notes
            } = farm.rows[0]

            longitude = Number(req.body.longitude) || longitude
            latitude = Number(req.body.latitude) || latitude
            fk_farmer = Number(req.body.fk_farmer) || fk_farmer
            fk_municipality = Number(req.body.fk_municipality) || fk_municipality
            fk_barangay = Number(req.body.fk_barangay) || fk_barangay
            farm_area = Number(req.body.farm_area) || farm_area
            less_than_five_years_trees = Number(req.body.less_than_five_years_trees) ||less_than_five_years_trees
            five_years_or_more_trees = Number(req.body.five_years_or_more_trees) || five_years_or_more_trees
            peak_season_production = Number(req.body.peak_season_production) || peak_season_production
            off_season_production = Number(req.body.off_season_production) || off_season_production
            farm_notes = req.body.farm_notes || farm_notes

        const updatedFarmDetails = await pool.query(farmsQueries.UPDATE_FARM_DETAILS, 
                [
                    longitude,
                    latitude,
                    fk_farmer,
                    farm_area,
                    less_than_five_years_trees,
                    five_years_or_more_trees,
                    peak_season_production,
                    off_season_production,
                    fk_municipality,
                    fk_barangay,
                    farm_notes,
                    id
                ])
            res.json({farmer: updatedFarmDetails.rows[0], message: 'Farm details updated successfully'})
        } else {
            res.status(400).json({error: 'Farm not found'})
        }

        
        
    } catch (error) {
        res.status(500).json({error: `${error.message}`})
    }
}



