const orderTradesByDate = (trades) => {

    const formatDate = (date) => {
        //regex to split date on characters
        splitDate = date.split(/[. :]+/)
        formattedDate = splitDate[2] + splitDate[1] + splitDate[0] + splitDate[3] + splitDate[4]
        return parseInt(formattedDate)
    }

    trades.sort((a, b) => {
        return formatDate(a.date) - formatDate(b.date)
    } )

    return trades
}

module.exports = {
    orderTradesByDate,
}