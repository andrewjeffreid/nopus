const express = require('express');
const router = express.Router();

const { getTrialBalance } = require('../controllers/reporting');

// get all products from db
router.get('/', getTrialBalance);

module.exports = router;