// DEPENDENCIES
const express = require('express');

// CONFIGURATION
require('dotenv').config()
const app = express();

//BOOKS CONTROLLER
const booksController = require('./controllers/books-controller');
app.use('/books', booksController);

// HOMEPAGE ROUTE
app.get('/', function (req, res) {
    res.send('Welcome to this Books API!')
});

// LISTEN
app.listen(PORT, ( ) => {
    console.log ('You are currently running on port: ', PORT)
});