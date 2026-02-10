const db = require('../queries/books');

async function getAllBooks(req, res) {
    const books = await db.getAllBooks();
    res.render('books');
}

module.exports = { getAllBooks };