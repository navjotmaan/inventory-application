const db = require('../queries/genres');

async function getAllGenres(req, res) {
    const genres = await db.getAllGeneres();
    res.render('home', { title: 'Book Store', genres });
}

module.exports = { getAllGenres };