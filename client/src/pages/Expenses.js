import ExpenseRibbon from '../components/Expenses/ExpenseRibbon'
import ExpenseTable from '../components/Expenses/ExpenseTable'
import { useState, useEffect } from 'react'

export default function Expenses({ setSelectedTab, expenses }) {

    useEffect(() => {
        setSelectedTab("expenses")
    }, [setSelectedTab])

    const [selectedExpenses, setSelectedExpenses] = useState([])

    return (
        <div>
            <ExpenseRibbon selectedExpenses={selectedExpenses} setSelectedExpenses={setSelectedExpenses}/>
            <ExpenseTable expenses={expenses} selectedExpenses={selectedExpenses} setSelectedExpenses={setSelectedExpenses}/>
        </div>
    )
}