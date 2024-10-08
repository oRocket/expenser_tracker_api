<<<<<<< HEAD
# Expense Tracker App

## Overview
The **Expense Tracker App** is a simple and intuitive web application designed to help users manage their personal expenses efficiently.
Built using **Node.js**, **Express.js**, and **MySQL**, this application allows users to register, log in, and track their daily expenses with ease.
Users can add, edit, and delete expenses while also viewing a summary of their spending habits.

## Features
  - **User Authentication**: Register and log in with a secure password system.
  - **Add Expenses**: Quickly add expenses with details such as amount, date, and category.
  - **Edit Expenses**: Update expense details as needed.
  - **Delete Expenses**: Remove expenses from the list.
  - **View Expenses**: Display a list of expenses with a summary of total spending.
  - **Responsive Design**: Mobile-friendly and accessible on all devices.

## Technologies Used
  - **Node.js**: JavaScript runtime for server-side programming.
  - **Express.js**: Web framework for building RESTful APIs.
  - **MySQL**: relational database for storing user data and expenses.
  - **bcryptjs**: Library for hashing passwords.
  - **jsonwebtoken**: For generating and verifying JSON Web Tokens for authentication.
  - **dotenv**: Environment variable management.

## Prerequisites
Before you begin, ensure you have the following installed on your system:
  - Node.js (version 14 or higher)
  - MySQL
  - Git

## Installation
Follow these steps to set up the project locally:
1. **Clone the repository**:
   ```
   git clone https://github.com/oRocket/expenser_tracker_api.git
   cd expenser_tracker_api
   ```
2. **Install dependencies**:
   ```
   npm install
   ```
3. **Set up environment variables**:
   ```
   PORT=3010
   DB_HOST=localhost
   DB_USER=your_mysql_username
   DB_PASSWORD=your_mysql_password
   DB_NAME=expense_tracker
   JWT_SECRET=your_jwt_secret_key
   
4. **Initialize the database**:
   ```
   CREATE DATABASE IF NOT EXISTS expense_tracker;

   USE expense_tracker;

   CREATE TABLE users (
     id INT AUTO_INCREMENT PRIMARY KEY,
     username VARCHAR(255) NOT NULL UNIQUE,
     password VARCHAR(255) NOT NULL);

   CREATE TABLE expenses (
     id INT AUTO_INCREMENT PRIMARY KEY,
     user_id INT NOT NULL,
     amount DECIMAL(10, 2) NOT NULL,
     description VARCHAR(255),
     category VARCHAR(50),
     date DATE NOT NULL,
     FOREIGN KEY (user_id) REFERENCES users(id)
     );
   ```

5. **Start the server**:
   ```
   npm start
   ```
   `The server will start on http://localhosr:3010`

## Usage
**Register a New User**
  - **Endpoint:** POST   /api/auth/register
  - **Payload:**
    ```
    {
      "username": "your_username",
      "password": "your_password"
    }
    ```

**Login:**
  - **Endpoint:** POST  /api/auth/login
  - **Payload**
    ```
    {
      "username": "your_username",
      "password": "your_password"
    }
    ```
  - **Response**: A JSON Web Token {JWT) for authenticated requests.

**Add an Expense**
  - **Endpoint:** POST  /api/expenses
  - **Headers:** Authorization: Bearer <token>
  - **Payload:**
    ```
    {
      "amount": 20.5,
      "description": "Lunch at cafe",
      "category": "Food",
      "date": "2024-07-25"
    }
    ```

**Edit an Expense**
  - **Endpoint:** PUT  /api/expenses/:id
  - **Headers:** Authorization: Bearer <token>
  - **Payload:**
    ```
    {
      "amount": 25.0,
      "description": "Dinner at restaurant",
      "category": "Food",
      "date": "2024-07-26"
    }
    ```

**Delete an Expense**
  - **Endpoint:** DELETE  /api/expenses/:id
  - **Headers:** Authorization: Bearer <token>

**View Expenses**
  - **Endpoint:** GET  /api/expenses
  - **Headers:** Authorization: Bearer <token>

## Security Considerations
  - **Password Hashing:** User passwords are hashed using `bcryptjs` for secure storage.
  - **Authentication:** Uses JWT for secure user sessions and authentication.

## Future Enhancements
  - Add user settings and customization options.
  - Implement expense categorization and reporting.
  - Add support for multiple currencies.
  - Integrate graph and chart libraries for visualizing expenses.

## Contributing
Contributions are welcome! Please fork the repository, make your changes, and submit a pull request. Ensure your code follows the existing code style and add tests for new features.
  1. **Fork the repository**
  2. **Create a new branch:** git checkout -b feature/your-feature-name
  3. **Commit your changes:** git commit -m 'Add new feature'
  4. **Push to the branch:** git push origin feature/your-feature-name
  5. **Submit a pull request**

## License
This project is licensed under the MIT License. See the LICENSE file for more information.

## Contact
For any questions or issues, please contact `aotwum.at@outlook.com` or open an issue on GitHub.
