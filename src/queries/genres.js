const pool = require('../config/database');

async function getAllGeneres() {
    const { rows } = await pool.query('SELECT * FROM genres ORDER BY id ASC');
    return rows;
}

async function insertGenres(genre) {
    const result = await pool.query("INSERT INTO genres (genre) VALUES ($1) RETURNING id", [genre]);
    return result.rows[0].id;
}

async function updateGenre(genre, id) {
    await pool.query("UPDATE genres SET genre = $1 WHERE id = $2", [genre, id]);
}

async function deleteGenre(id) {
    await pool.query("DELETE FROM genres WHERE id = $1", [id]);
}

module.exports = { 
    getAllGeneres,
    insertGenres,
    updateGenre,
    deleteGenre
};