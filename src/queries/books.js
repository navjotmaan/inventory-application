const pool = require('../config/database');

async function createBook(title, price, rating, genre_id, writer_id) {
    await pool.query(`INSERT INTO books (title, price, rating, genre_id, writer_id) VALUES ($1, $2, $3, $4, $5)`, 
                    [title, price, rating, genre_id, writer_id]);
}

async function getAllBooks(id) {
    const { rows } = await pool.query(`SELECT books.id, books.title, books.price, books.rating, books.genre_id, writers.writer_name, genres.genre FROM books
                                    JOIN writers ON books.writer_id = writers.id 
                                    JOIN genres ON books.genre_id = genres.id
                                    WHERE genre_id = $1`, [id]);
    return rows;
}

async function deleteAllBooks(id) {
    await pool.query("DELETE FROM books WHERE genre_id = $1", [id]);
}

async function deleteBookById(id) {
    await pool.query("DELETE FROM books WHERE id = $1", [id]);
}

module.exports = {
    createBook,
    getAllBooks,
    deleteAllBooks,
    deleteBookById
};