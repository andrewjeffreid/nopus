const trade = require("../models/trade");
const expense = require("../models/expense")
const { getTradingAccounts } = require('../accounting/tradingaccounts')
const { orderTradesByDate } = require('../helper/date')
const { convertStringsToNumbers } = require('../helper/trade')

const getTrialBalance = async (req, res) => {

    const trades = orderTradesByDate(convertStringsToNumbers(await trade.find()))
    const expenses = await expense.find()
    let tradingAccounts = []

    tradingAccounts = await getTradingAccounts(trades)
}

module.exports = {
    getTrialBalance
}
