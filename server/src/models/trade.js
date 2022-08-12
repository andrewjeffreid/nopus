const mongoose = require('mongoose');

const tradeSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    amount: {
        type: String,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    },
    usd: {
        type: String,
        required: true,
    },
    exchange: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('trade', tradeSchema);