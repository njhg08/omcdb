const express = require('express')
const router = express.Router();
const {getMunicipalities, getBarangays, getBarangayGivenMunicipality} = require('../controllers/address')

router.route('/municipalities').get(getMunicipalities)

router.route('/barangays').get(getBarangays)

router.route('/municipalities/:municipalityId/barangays').get(getBarangayGivenMunicipality)

module.exports = router;