import '../Dropdown.css'

export default function AddTrade({ trades, setTrades }) {

    const createTrade = async (data) => {

        const url = "http://localhost:8080/trades/create";
        try {
            await fetch(url, {
                method: "POST",
                headers: {'Content-Type': 'application/json'}, 
                body: JSON.stringify(data)
            })
        } catch (TypeError) {
            console.log("The server is not running.")
        }
    }

    const handleSubmit = (e) => {

        const data = {
            date: e.target.date.value,
            type: e.target.type.value,
            amount: e.target.amount.value,
            currency: e.target.currency.value,
            usd: e.target.usd.value,
            exchange: e.target.exchange.value,
        }

        createTrade(data)
    }

    return (
        <form id="dropdown" onSubmit={e=>handleSubmit(e)}>
            <div>
                <label>Date: </label>
                <input id="date" type="text" required/>
            </div>
            <div>
                <label>Type: </label>
                <input id="type" type="text" required/>
            </div>
            <div>
                <label>Amount: </label>
                <input id="amount" type="text" required/>
            </div>
            <div>
                <label>Currency: </label>
                <input id="currency" type="text" required/>
            </div>
            <div>
                <label>USD: </label>
                <input id="usd" type="text" required/>
            </div>
            <div>
                <label>Exchange: </label>
                <input id="exchange" type="text" required/>
            </div>
            <div>
                <input type="submit" value="Add Trade"/>
            </div>
        </form>
    )
}