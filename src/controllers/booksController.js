const db = require('../queries/books');

async function getAllBooks(req, res) {
    const id = req.params.id; 

    try {
        const books = await db.getAllBooks(id);
        res.render('books', { title: 'Book Store', books});
    } catch (err) {
        console.error(err);
    }
}

module.exports = { getAllBooks };