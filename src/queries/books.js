const pool = require('../config/database');

async function createBook(title, price, rating, genre_id, writer_id) {
    await pool.query("INSERT INTO books (title, price, rating) VALUES ($1, $2, $3)", [title, price, rating, genre_id, writer_id]);
}

async function getAllBooks(id) {
    const { rows } = await pool.query("SELECT * FROM books WHERE genre_id = $1", [id]);
    return rows;
}

module.exports = {
    createBook,
    getAllBooks
};