const express = require('express');
const { getDiseases, addDisease } = require('../controllers/diseases');


const router = express.Router();

router.route('/').get(getDiseases).post(addDisease)



module.exports = router;