import Delete from '../../assets/delete.svg'
import add from '../../assets/add.svg'
import edit from '../../assets/edit.svg'
import '../Ribbon.css'
import AddExpense from './AddExpense'
import EditExpense from './EditExpense'
import { useState } from 'react'


export default function ExpenseRibbon({ selectedExpenses }) {

    const [showAddExpense, setShowAddExpense] = useState(false)
    const [showEditExpense, setShowEditExpense] = useState(false)

    const toggleShowAddExpense = () => {
        setShowAddExpense(!showAddExpense)
    }

    const toggleShowEditExpense = () => {
        if (!showEditExpense) {
            if (selectedExpenses.length === 1) {
                setShowEditExpense(!showEditExpense)
            } 
        } else {
            setShowEditExpense(!showEditExpense)
        }
        
    }

    const deleteExpenses = (selectedExpenses) => {

        const url = "http://localhost:8080/expenses/delete"

        try {

            selectedExpenses.forEach((expense) => {
                fetch(url, {
                    method: "DELETE",
                    headers: {'Content-Type': 'application/json'}, 
                    body: JSON.stringify(expense)
                }).then((res) => {
                    console.log("Request complete! response:", res)
                    window.location.reload()
                })
            })
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="ribbon">
            <div>
                <button onClick={e=>toggleShowAddExpense()}><img src={add} alt="add expense"/></button>
                {showAddExpense ? <AddExpense/> : null}
                <p>Add<br/>Expense</p>
            </div> 
            <div>
                <button onClick={e=>toggleShowEditExpense()}><img src={edit} alt="edit expense"/></button>
                {showEditExpense ? <EditExpense selectedExpenses={selectedExpenses} /> : null}
                <p>Edit<br/>Expense</p>
            </div>
            <div>
            <button onClick={e=>deleteExpenses(selectedExpenses)}><img src={Delete} alt="delete expense"/></button>
                <p>Delete<br/>Expense</p>
            </div>
        </div>
    )
}