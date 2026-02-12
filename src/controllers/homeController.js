const db = require('../queries/genres');

async function getAllGenres(req, res) {
    try {
        const genres = await db.getAllGeneres();
        res.render('home', { title: 'Book Store', genres });
    } catch (err) {
        console.error(err);
    }
}

module.exports = { getAllGenres };