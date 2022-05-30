// DEPENDENCIES
const express = require('express');

// CONFIGURATION
const app = express();

// HOMEPAGE ROUTE
app.get('/', function (req, res) {
    res.send('Welcome to this Books API!')
});

// LISTEN
app.listen(PORT, ( ) => {
    console.log ('You are currently running on port: ', PORT)
});