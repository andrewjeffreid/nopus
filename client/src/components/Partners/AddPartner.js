import '../Dropdown.css'

export default function AddPartner() {

    const createPartner = async (data) => {

        const url = "http://localhost:8080/partners/create";
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
            investorNo: e.target.investorNo.value,
            name: e.target.name.value,
            address: e.target.address.value,
            equity: e.target.equity.value,
        }

        createPartner(data)
    }

    return (
        <form id="dropdown" onSubmit={e=>handleSubmit(e)}>
            <div>
                <label>Investor Number: </label>
                <input id="investorNo" type="number" min="0" max="9999" required/>
            </div>
            <div>
                <label>Name: </label>
                <input id="name" type="text" required/>
            </div>
            <div>
                <label>Address: </label>
                <input id="address" type="text" required/>
            </div>
            <div>
                <label>Equity: </label>
                <input id="equity" type="text" required/>
            </div>
            <div>
                <input type="submit" value="Add Partner"/>
            </div>
        </form>
    )
}