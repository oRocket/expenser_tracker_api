// controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

// Register user
exports.register = (req, res) => {
    const { username, password } = req.body;

    console.log("Received body:", req.body);  // Log the request body

    if (!username || !password) {
        return res.status(400).json({ message: 'Please provide username and password' });
    }

    // Hash password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Check if the user already exists
    userModel.findUserByUsername(username, (err, user) => {
        if (err) return res.status(500).json({ message: 'Database error', error: err });
        if (user) return res.status(400).json({ message: 'Username already exists' });

        // Create user
        userModel.createUser(username, hashedPassword, (err, userId) => {
            if (err) return res.status(500).json({ message: 'Database error', error: err });
            res.status(201).json({ message: 'User registered successfully', userId });
        });
    });
};

// Login user
exports.login = (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Please provide username and password' });
    }

    // Find user
    userModel.findUserByUsername(username, (err, user) => {
        if (err) return res.status(500).json({ message: 'Database error', error: err });
        if (!user) return res.status(400).json({ message: 'User not found' });

        // Compare passwords
        const isPasswordValid = bcrypt.compareSync(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        // Create JWT token
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Login successful', token });
    });
};
