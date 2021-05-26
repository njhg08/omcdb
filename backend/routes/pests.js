const express = require('express');
const { getPests, addPest } = require('../controllers/pests');

const router = express.Router();

router.route('/').get(getPests).post(addPest)



module.exports = router;