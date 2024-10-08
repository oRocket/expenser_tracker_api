// controllers/expenseController.js

const expenseModel = require('../models/expenseModel');

// Add expense
exports.addExpense = (req, res) => {
    const { amount, description, date } = req.body;
    const userId = req.user.id;

    if (!amount || !date) {
        return res.status(400).json({ message: 'Please provide amount and date' });
    }

    expenseModel.addExpense(userId, amount, description, date, (err, expenseId) => {
        if (err) return res.status(500).json({ message: 'Database error', error: err });
        res.status(201).json({ message: 'Expense added successfully', expenseId });
    });
};

// Get all expenses for a user
exports.getExpensesByUserId = (req, res) => {
    const userId = req.user.id;

    expenseModel.getExpensesByUserId(userId, (err, expenses) => {
        if (err) return res.status(500).json({ message: 'Database error', error: err });
        res.status(200).json({ expenses });
    });
};

// Edit expense
exports.editExpense = (req, res) => {
    const { id } = req.params;
    const { amount, description, date } = req.body;
    const userId = req.user.id;

    expenseModel.updateExpense(id, userId, amount, description, date, (err, affectedRows) => {
        if (err) return res.status(500).json({ message: 'Database error', error: err });
        if (affectedRows === 0) return res.status(404).json({ message: 'Expense not found' });

        res.status(200).json({ message: 'Expense updated successfully' });
    });
};

// Delete expense
exports.deleteExpense = (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;

    expenseModel.deleteExpense(id, userId, (err, affectedRows) => {
        if (err) return res.status(500).json({ message: 'Database error', error: err });
        if (affectedRows === 0) return res.status(404).json({ message: 'Expense not found' });

        res.status(200).json({ message: 'Expense deleted successfully' });
    });
};