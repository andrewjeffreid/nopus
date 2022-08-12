export default function ExpenseTable({ expenses, selectedExpenses, setSelectedExpenses}) {

    const handleChange = (expense) => {

        const newSelectedExpenses = selectedExpenses.includes(expense)? selectedExpenses.filter(selectedExpense => selectedExpense !== expense): [...selectedExpenses, expense]
        setSelectedExpenses(newSelectedExpenses)
    }

    return (
        <table id="expense-table">
            <thead>
                <tr>
                    <th>Select</th>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Expense</th>
                    <th>Amount</th>
                    <th>Comment</th>
                </tr>
            </thead>
            <tbody>
                {(expenses.map(expense => {
                    return (
                        <tr key={expense._id}>
                            <td><input type="checkbox" onChange={e=>{handleChange(expense)}}/></td>
                            <td>{expense.date}</td>
                            <td>{expense.type}</td>
                            <td>{expense.expense}</td>
                            <td>{expense.amount}</td>
                            <td>{expense.comment}</td>
                        </tr>
                    )
                }))}
            </tbody>
        </table>
    )
}