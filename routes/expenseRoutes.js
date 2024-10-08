// routes/expenseRoutes.js

const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');
const authenticateJWT = require('../middleware/authenticateJWT');

// Add expense route
router.post('/', authenticateJWT, expenseController.addExpense);

// Get all expenses for a user
router.get('/', authenticateJWT, expenseController.getExpensesByUserId);

// Edit expense route
router.put('/:id', authenticateJWT, expenseController.editExpense);

// Delete expense route
router.delete('/:id', authenticateJWT, expenseController.deleteExpense);

module.exports = router;