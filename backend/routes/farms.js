const express = require('express');
const { getFarms, addFarm, getFarmerFarms, getFarm, getFarmPests, updateFarmPest, getFarmDiseases, updateFarmDisease, getFarmPractices, updateFarmPractice, updateFarmDetails } = require('../controllers/farms');

const router = express.Router();

router.route('/').get(getFarms).post(addFarm)

router.route('/:id').get(getFarm).put(updateFarmDetails)
router.route('/:id/pests').get(getFarmPests).patch(updateFarmPest)
router.route('/:id/diseases').get(getFarmDiseases).patch(updateFarmDisease)
router.route('/:id/practices').get(getFarmPractices).patch(updateFarmPractice)
router.route('/farmer/:farmerId').get(getFarmerFarms)


module.exports = router;