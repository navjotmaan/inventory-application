const pool = require('../config/database');

async function getAllGeneres() {
    const { rows } = await pool.query('SELECT * FROM genres');
    return rows;
}

async function insertGenres(genre) {
    const result = await pool.query("INSERT INTO genres (genre) VALUES ($1) RETURNING id", [genre]);
    return result.rows[0].id;
}

module.exports = { 
    getAllGeneres,
    insertGenres
};