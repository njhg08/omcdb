const express = require('express');
const { getPractices, addPractice } = require('../controllers/practices');

const router = express.Router();

router.route('/').get(getPractices).post(addPractice)



module.exports = router;