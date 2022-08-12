const expense = require("../models/expense");

// READ
const getAllExpenses = async (req, res) => {

    res.send(await expense.find())
}

// CREATE
const createExpense = (req, res) => {

    expense.create({
        date: req.body.date,
        type: req.body.type,
        expense: req.body.expense,
        amount: req.body.amount,
        comment: req.body.comment,
    })

    res.send("created");
}

// UPDATE
const updateExpenseById = async (req, res) => {

    await expense.updateOne({_id: req.body._id}, {$set:
        {
            date: req.body.date,
            type: req.body.type,
            expense: req.body.expense,
            amount: req.body.amount,
            comment: req.body.comment,
        },
    })

    res.send("updated");
}

//DELETE
const deleteExpenseById = async (req, res) => {
    
    await expense.deleteOne({_id: req.body._id})

    res.send("deleted");
}

module.exports = {
    getAllExpenses,
    createExpense,
    updateExpenseById,
    deleteExpenseById,
}

