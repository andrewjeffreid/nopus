
import '../Dropdown.css'

export default function EditPartner({ selectedPartners }) {

    const updatePartner = async (data) => {

        const url = "http://localhost:8080/partners/update"

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
            _id: selectedPartners[0]._id,
            investorNo: e.target.investorNo.value,
            name: e.target.name.value,
            address: e.target.address.value,
            equity: e.target.equity.value,
        }

        updatePartner(data)
    
    }

    const selectOnePartner = () => {
        if (selectedPartners.length === 1) {
            return (
                <form id="dropdown" onSubmit={e=>handleSubmit(e)}>
                    <div>
                        <label>Investor Number: </label>
                        <input id="investorNo" type="number" min="0" required defaultValue={selectedPartners[0].investorNo}></input>
                    </div>
                    <div>
                        <label>Name: </label>
                        <input id="name" type="text" required defaultValue={selectedPartners[0].name}></input>
                    </div>
                    <div>
                        <label>Address: </label>
                        <input id="address" type="text" required defaultValue={selectedPartners[0].address}></input>
                    </div>
                    <div>
                        <label>Equity: </label>
                        <input id="equity" type="text" required defaultValue={selectedPartners[0].equity}></input>
                    </div>
                    <div>
                        <input type="submit" value="Save Changes"/>
                    </div>
                </form>
            )
        } else {
            console.log("Select one partner.")
        }
    }

    return (
        <div>
            {selectOnePartner()}
        </div>
    )
}