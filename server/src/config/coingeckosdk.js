// LIMIT: 50 api calls/min
const fetch = require("node-fetch");

const url = "https://api.coingecko.com/api/v3/"

const getMarketPrice = async (symbol) => {
    
    // find coingecko id for given coin
    try {

        let coinList = {
            btc: "bitcoin",
            xlm: "stellar",
            forth: "forth",
            grt: "graph",
            comp: "compound",
        }

        // return current market price of coin
        try {

            marketPrice = await fetch(url + "simple/price?ids=" + coinList.symbol + "&vs_currencies=usd")
            .then((res) => res.json())
            console.log(marketPrice)
            return marketPrice

        } catch (err) {

            console.log(err)
            return
        }

    } catch (err) {

    console.log("Coin ID not supported.")
    return

    }
}

module.exports = {
    getMarketPrice,
}