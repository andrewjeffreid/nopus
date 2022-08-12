const { fifo, sum } = require('../accounting/fifo')

var marketPrice = 99
var trades = [
    {type: "BUY (IN)", quantity: 12, usd: 1200},
    {type: "BUY (IN)", quantity: 17, usd: 1683},
    {type: "BUY (IN)", quantity: 3, usd: 309},
    {type: "SELL (OUT)", quantity: 9, usd: 909},
    {type: "SELL (OUT)", quantity: 4, usd: 420},
]

test('properly gets trading accounts', () => {
    expect(fifo(trades, marketPrice)).toEqual(
        {"brokerInterestIncome": 0, 
        "commissionExpenses": 0, 
        "dividendIncome": 0, 
        "longPortfolioValueAtCost": 1893, 
        "longPortfolioValueAtMarketValue": 1881, 
        "otherTradingCost": 0, 
        "realizedPnL": 30, 
        "unrealizedPnL": -12})
})