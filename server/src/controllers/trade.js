const trade = require("../models/trade");

// INSERT MANY
const importTrades = async (req, res) => {

    await req.body.forEach(row => {trade.create(
        {
            date: row['Trade Date'],
            type: row['Type'],
            amount: row['Amount'],
            currency: row['Cur.'].toLowerCase(),
            usd: row['Value in USD at transaction'],
            exchange: row['Exchange'],
        }
    )})

    res.send("imported")
}

// READ
const getAllTrades = async (req, res) => {

    res.send(await trade.find())
}

// CREATE
const createTrade = (req, res) => {

    trade.create({
        date: req.body.date,
        type: req.body.type,
        amount: req.body.amount,
        currency: req.body.currency,
        usd: req.body.usd,
        exchange: req.body.exchange,
    })

    res.send("created");
}

// UPDATE
const updateTradeById = async (req, res) => {

    await trade.updateOne({_id: req.body._id}, {$set:
        {
            date: req.body.date,
            type: req.body.type,
            amount: req.body.amount,
            currency: req.body.currency,
            usd: req.body.usd,
            exchange: req.body.exchange,
        },
    })
    res.send("updated");
}

//DELETE
const deleteTradeById = async (req, res) => {
    
    await trade.deleteOne({_id: req.body._id})

    res.send("deleted");
}

const clearTrades = async (req, res) => {

    await trade.deleteMany({})
}

module.exports = {
    importTrades,
    getAllTrades,
    createTrade,
    updateTradeById,
    deleteTradeById,
    clearTrades,
}

