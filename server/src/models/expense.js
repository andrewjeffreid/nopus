const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    expense: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('expense', expenseSchema);