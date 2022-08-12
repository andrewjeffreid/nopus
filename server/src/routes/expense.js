const express = require('express');
const router = express.Router();

const { getAllExpenses, createExpense, updateExpenseById, deleteExpenseById } = require('../controllers/expense');

// get all products from db
router.get('/', getAllExpenses);

router.post('/create', createExpense);

router.put('/update', updateExpenseById);

router.delete('/delete', deleteExpenseById);

module.exports = router;