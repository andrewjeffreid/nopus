import '../Dropdown.css'

export default function EditExpense({ selectedExpenses }) {

    const updateExpense = async (data) => {

        const url = "http://localhost:8080/expenses/update"

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
            _id: selectedExpenses[0]._id,
            type: e.target.type.value,
            expense: e.target.expense.value,
            amount: e.target.amount.value,
            comment: e.target.comment.value,
        }

        updateExpense(data)
    
    }

    const selectOneExpense = () => {
        if (selectedExpenses.length === 1) {
            return (
                <form id="dropdown" onSubmit={e=>handleSubmit(e)}>
                    <div>
                        <label>Date: </label>
                        <input id="date" type="text" min="0" required defaultValue={selectedExpenses[0].date}></input>
                    </div>
                    <div>
                        <label>Type: </label>
                        <input id="type" type="text" required defaultValue={selectedExpenses[0].type}></input>
                    </div>
                    <div>
                        <label>Expense: </label>
                        <input id="expense" type="text" required defaultValue={selectedExpenses[0].expense}></input>
                    </div>
                    <div>
                        <label>Amount: </label>
                        <input id="amount" type="number" required defaultValue={selectedExpenses[0].amount}></input>
                    </div>
                    <div>
                        <label>Comment: </label>
                        <input id="comment" type="text" required defaultValue={selectedExpenses[0].comment}></input>
                    </div>
                    <div>
                        <input type="submit" value="Save Changes"/>
                    </div>
                </form>
            )
        } else {
            console.log("Select one expense.")
        }
    }

    return (
        <div>
            {selectOneExpense()}
        </div>
    )
}