const fifo = (transactions, marketPrice) => {

    // queue
    let holdings = []

    // accounts
    let realizedPnL = 0;
    let unrealizedPnL = 0;
    let commissionExpenses = 0;
    let otherTradingCost = 0;
    let brokerInterestIncome = 0;
    let dividendIncome = 0;
    let longPortfolioValueAtCost = 0;
    let longPortfolioValueAtMarketValue = 0;

    // iterate through trade feed per each assset
    transactions.forEach(transaction => {

        // add buy to back of queue
        if (transaction.type === "Buy (IN)") {
            //console.log("buy", transaction.date, transaction.currency, transaction.amount)
            holdings.unshift(transaction)
            
        }

        // FIFO accounting for sale of asset
        else if (transaction.type === "Sell (OUT)") {

            //convert usd to negative (temporary)
            transaction.usd *= -1
            transaction.amount *= -1
            
            //console.log("sell", transaction.date, transaction.currency, transaction.amount, transaction.usd, holdings)
            // holdings[holdings.length - 1] represents first in
            sellAmount = transaction.amount;
            buy = 0;
            let holdingAmount = 0;
            holdings.map((holding) => {
                holdingAmount += holding.amount
            })

            // if selling off all holdings
            if (sellAmount === holdingAmount) {
                holdings.forEach((holding) => {
                    buy += holding.usd
                    holdings = []
                })
                realizedPnL += transaction.usd - buy

            } else {
                while (sellAmount >= holdings[holdings.length - 1].amount) {

                    // sell off items at front of queue (first in) 
                    fifoBuy = holdings.pop()
                    buy += fifoBuy.usd
                    sellAmount -= fifoBuy.amount

                }

                // get leftovers
                fractionalSell = sellAmount * (holdings[holdings.length - 1].usd / holdings[holdings.length - 1].amount)
                buy += fractionalSell

                // adjust queue
                holdings[holdings.length - 1].amount -= sellAmount
                holdings[holdings.length - 1].usd -= fractionalSell

                // calculate realized PnL
                realizedPnL += transaction.usd - buy
            }
            
        } 

        // gas fees
        else if (transaction.type === "Fee (OUT)") {
            //console.log("fee", transaction.date, transaction.currency, transaction.amount)
            commissionExpense += transaction.usd

        } 

        // yield
        else if (transaction.type === "Deposit (IN)") {
            //console.log("deposit", transaction.date, transaction.currency, transaction.amount)
            holdings.unshift(transaction)
            dividendIncome += transaction.usd

        }
    })

    // get portfolio values at cost (FIFO) and market value
    holdings.forEach(holding => {

        longPortfolioValueAtCost += holding.usd;
        longPortfolioValueAtMarketValue += holding.amount * marketPrice

    })

    // get unrealized
    unrealizedPnL = longPortfolioValueAtMarketValue - longPortfolioValueAtCost

    //console.log(transactions[0].currency, unrealizedPnL)
    //console.log(transactions[0].currency, realizedPnL)
    return {
        realizedPnL: realizedPnL,
        unrealizedPnL: unrealizedPnL,
        longPortfolioValueAtCost: longPortfolioValueAtCost,
        longPortfolioValueAtMarketValue: longPortfolioValueAtMarketValue,
        commissionExpenses: commissionExpenses,
        dividendIncome: dividendIncome,
        otherTradingCost: otherTradingCost,
        brokerInterestIncome: brokerInterestIncome,
    }
}

module.exports = {
    fifo,
}