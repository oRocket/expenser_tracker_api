const db = require('../config/db');

// Function to find a user by username
const findUserByUsername = (username, callback) => {
    db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
        if (err) return callback(err, null);
        callback(null, results[0]);
    });
};

// Function to create a new user
const createUser = (username, hashedPassword, callback) => {
    db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err, result) => {
        if (err) return callback(err, null);
        callback(null, result.insertId);
    });
};

module.exports = {
    findUserByUsername,
    createUser
};
