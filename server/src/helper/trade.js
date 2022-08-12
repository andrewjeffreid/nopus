const trade = require("../models/trade");

const convertStringsToNumbers = (trades) => {

    let newTrades = [];
    trades.map((trade) => {
        newTrades.push({
            date: trade.date,
            type: trade.type,
            amount: Number(trade.amount), 
            currency: trade.currency,
            usd: Number(trade.usd),
            exchange: trade.exchange,
        })
    })
    return newTrades
}

module.exports = {
    convertStringsToNumbers
}