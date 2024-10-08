// server.js

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

// Import routes
const authRoutes = require('./routes/authRoutes');
const expenseRoutes = require('./routes/expenseRoutes');


const app = express();
const PORT = process.env.PORT || 3010;

// Middleware
app.use(bodyParser.json());

// Mounting Routes with `/api` prefix
app.use('/api/auth', authRoutes);
app.use('/api/expenses', expenseRoutes);

// Routes
app.get('/', (req, res) => {
    res.send('Expense Tracker API');
});

app.listen(PORT, function() {
    console.log(`Server running at http://localhost:3010 on port ${PORT}`);
});