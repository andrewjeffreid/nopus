import '../Dropdown.css'

export default function EditTrade({ selectedTrades }) {

    const updateTrade = async (data) => {

        const url = "http://localhost:8080/trades/update"

        try {
            await fetch(url, {
                method: "PUT",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
        } catch (TypeError) {
            console.log("The server is not running.")
        }
    }

    const handleSubmit = (e) => {

        const data = {
            _id: selectedTrades[0]._id,
            date: e.target.date.value,
            type: e.target.type.value,
            amount: e.target.amount.value,
            currency: e.target.currency.value,
            usd: e.target.usd.value,
            exchange: e.target.exchange.value,
        }

        updateTrade(data)
    
    }

    const selectOneTrade = () => {
        if (selectedTrades.length === 1) {
            return (
                <form id="dropdown" onSubmit={e=>handleSubmit(e)}>
                    <div>
                        <label>Date: </label>
                        <input id="date" type="text" required defaultValue={selectedTrades[0].date}></input>
                    </div>
                    <div>
                        <label>Type: </label>
                        <input id="type" type="text" required defaultValue={selectedTrades[0].type}></input>
                    </div>
                    <div>
                        <label>Amount: </label>
                        <input id="amount" type="text" required defaultValue={selectedTrades[0].amount}></input>
                    </div>
                    <div>
                        <label>Currency: </label>
                        <input id="currency" type="text" required defaultValue={selectedTrades[0].currency}></input>
                    </div>
                    <div>
                        <label>USD: </label>
                        <input id="usd" type="text" required defaultValue={selectedTrades[0].usd}></input>
                    </div>
                    <div>
                        <label>Exchange: </label>
                        <input id="exchange" type="text" required defaultValue={selectedTrades[0].exchange}></input>
                    </div>
                    <div>
                        <input type="submit" value="Save Changes"/>
                    </div>
                </form>
            )
        } else {
            console.log("Select one trade.")
        }
    }

    return (
        <div>
            {selectOneTrade()}
        </div>
    )
}