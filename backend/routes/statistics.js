const express = require('express');
const { getTotalFarmerCount, getTotalFarmerCountBySex, getTotalFarmerCountBySexGivenId } = require('../controllers/statistics');

const router = express.Router();

router.route('/totalFarmers').get(getTotalFarmerCount)
router.route('/totalFarmers/sex').get(getTotalFarmerCountBySex)
router.route('/totalFarmers/sex/:id').get(getTotalFarmerCountBySexGivenId)



module.exports = router;