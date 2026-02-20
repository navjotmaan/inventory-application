const db = require('../queries/books');
const writerdb = require('../queries/writers');

async function getAllBooks(req, res) {
    const id = req.params.id; 
    
    try {
        const books = await db.getAllBooks(id);
        res.render('books', { title: 'Book Store', books});
        
    } catch (err) {
        console.error(err);
    }
}

async function addBook(req, res) {
    try {
        const writerId = await writerdb.insertWriter(req.body.writer);
        await db.createBook(req.body.title, req.body.price, req.body.rating, req.params.id, writerId);
        res.redirect(`/books/${req.params.id}`);
        
    } catch (err) {
        console.error(err);
        res.status(500).send("Error saving genre");
    }
}

async function updateBook(req, res) {
    const id = req.params.id;

    const bookId = req.body.id;     
    const price = req.body.price;   
    const rating = req.body.rating;

    try {
        await db.updateBookById(bookId, price, rating);
        res.redirect(`/books/${id}`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating book");
    }
}

async function deleteBook(req, res) {
    const { id, bookId } = req.params; 
    
    try {
        await db.deleteBookById(bookId);
        res.redirect(`/books/${id}`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting book");
    }
}

module.exports = { 
    getAllBooks,
    addBook,
    deleteBook,
    updateBook
};