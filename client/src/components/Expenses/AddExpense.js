import '../Dropdown.css'

export default function AddExpense() {

    const createExpense = async (data) => {

        const url = "http://localhost:8080/expenses/create";
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
            expense: e.target.expense.value,
            amount: e.target.amount.value,
            comment: e.target.comment.value,
        }

        createExpense(data)
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
                <label>Expense: </label>
                <input id="expense" type="text" required/>
            </div>
            <div>
                <label>Amount: </label>
                <input id="amount" type="number" step="0.01" required/>
            </div>
            <div>
                <label>Comment: </label>
                <input id="comment" type="text" required/>
            </div>
            <div>
                <input type="submit" value="Add Expense"/>
            </div>
        </form>
    )
}