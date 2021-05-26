const express = require('express');
const { getPests } = require('../controllers/pests');

const router = express.Router();

router.route('/').get(getPests)



module.exports = router;