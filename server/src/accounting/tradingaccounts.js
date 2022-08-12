const { fifo } = require('./fifo')
const { getMarketPrice } = require('../config/coingeckosdk')

const getTradingAccounts = async (trades) => {

    let tradingAccounts = []
    
    // get each exchange we use
    let exchanges = [];
    for (let i = 0; i < trades.length; i++){
        if (!exchanges.includes(trades[i]["exchange"]))
            exchanges.push(trades[i]["exchange"]);
    }

    // get each currency we use
    let currencies = [];
    for (let i = 0; i < trades.length; i++) {
        if (!currencies.includes(trades[i]["currency"])) {
            currencies.push(trades[i]["currency"]);
        }
    }

// TEMPORARY TAKING OUT USD
    currencies = currencies.filter(currency => currency !== "usd")
    console.log(currencies)
    // map through exchanges
    for (const exchange of exchanges) {

        // setup accounts for each exchange
        let unrealizedPnL = {
            accountCategory: "Assets - Long Portfolio Value",
            glNumber: 13503,
            brokerAccount: exchange,
            financialAccount: "Long Portfolio Value-Unrealized Gain/Loss",
            balance: 0,
        }

        let realizedPnL = {
            accountCategory: "Income - Realized and Unrealized Gain/Loss",
            glNumber: 34003,
            brokerAccount: exchange,
            financialAccount: "Realized P&L - Short Term",
            balance: 0,
        }

        let longPortfolioValue = {
            accountCategory: "Assets - Long Portfolio Value",
            glNumber: 13501,
            brokerAccount: exchange,
            financialAccount: "Long Portfolio Value-Cost",
            balance: 0,
        }

        // get trade accounts for each currency at each exchange
        for (const currency of currencies) {  
    
            let transactions = []

            trades.map((trade) => {

                if (trade.exchange == exchange && trade.currency == currency) {
                    transactions.push(trade)
                }
            })
            
            // call pricing API from coingecko
            const marketPrice = await getMarketPrice(currency)

            // fifo accounting
            const fifoAccounts = fifo(transactions, marketPrice)

            // adjust account balances
            unrealizedPnL.balance += fifoAccounts.unrealizedPnL
            realizedPnL.balance += fifoAccounts.realizedPnL
            longPortfolioValue.balance += fifoAccounts.longPortfolioValueAtCost
            
        }

        // add accounts to trading accounts
        tradingAccounts.push(unrealizedPnL)
        tradingAccounts.push(realizedPnL)
        tradingAccounts.push(longPortfolioValue)

    }
    console.log(tradingAccounts)
    return tradingAccounts
}

module.exports = {
    getTradingAccounts,
}