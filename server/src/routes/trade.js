const express = require('express');
const router = express.Router();

const { importTrades, getAllTrades, createTrade, updateTradeById, deleteTradeById, clearTrades } = require('../controllers/trade');

router.post('/import', importTrades);

// get all products from db
router.get('/', getAllTrades);

router.post('/create', createTrade);

router.put('/update', updateTradeById);

router.delete('/delete', deleteTradeById);

router.delete('/clear', clearTrades);

module.exports = router;