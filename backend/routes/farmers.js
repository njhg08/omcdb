const express = require('express');

const router = express.Router();
const { getFarmers, addFarmer, getFarmer, updateFarmerDetails } = require('../controllers/farmers');


router.route('/').get(getFarmers).post(addFarmer)

router.route('/:id').get(getFarmer).put(updateFarmerDetails)

module.exports = router;