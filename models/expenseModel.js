// models/expenseModel.js

const db = require('../config/db');

// Function to add a new expense
const addExpense = (userId, amount, description, date, callback) => {
    db.query('INSERT INTO expenses (user_id, amount, description, date) VALUES (?, ?, ?, ?)',
    [userId, amount, description, date],
    (err, result) => {
        if (err) return callback(err, null);
        callback(null, result.insertId);
    });
};

// Function to get all expenses for a user
const getExpensesByUserId = (userId, callback) => {
    db.query('SELECT * FROM expenses WHERE user_id = ?', [userId], (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
    });
};

// Function to update an expense
const updateExpense = (id, userId, amount, description, date, callback) => {
    db.query('UPDATE expenses SET amount = ?, description = ?, date = ? WHERE id = ? AND user_id = ?',
    [amount, description, date, id, userId],
    (err, result) => {
        if (err) return callback(err, null);
        callback(null, result.affectedRows);
    });
};

// Function to delete an expense
const deleteExpense = (id, userId, callback) => {
    db.query('DELETE FROM expenses WHERE id = ? AND user_id = ?', [id, userId], (err, result) => {
        if (err) return callback(err, null);
        callback(null, result.affectedRows);
    });
};

module.exports = {
    addExpense,
    getExpensesByUserId,
    updateExpense,
    deleteExpense
};