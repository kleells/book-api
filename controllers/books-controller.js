const books = require('express').Router();

//GET book index
books.get('/', (req, res) => {
    Book.find()
        .then(foundBooks => {
            res.json(foundBooks)
        })
        .catch(err => {res.status(400).json({
            message: 'Unable to retreive Book Index'
        })})
})

module.exports = books;