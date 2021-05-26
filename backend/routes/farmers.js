const express = require('express');

const router = express.Router();
const { getFarmers, addFarmer, getFarmer } = require('../controllers/farmers');

router.route('/').get(getFarmers).post(addFarmer)

router.route('/:id').get(getFarmer)

module.exports = router;