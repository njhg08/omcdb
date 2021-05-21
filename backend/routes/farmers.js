const express = require('express')
const router = express.Router();
const { getFarmers } = require('../controllers/farmers');

router.route('/').get(getFarmers)

module.exports = router;