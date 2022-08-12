const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema({
    investorNo: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    equity: {
        type: Number,
        required: true,
    },
})

module.exports = mongoose.model('partner', partnerSchema);