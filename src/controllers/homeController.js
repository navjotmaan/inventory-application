const db = require('../queries/genres');

async function getAllGenres(req, res) {
    try {
        const genres = await db.getAllGeneres();
        res.render('home', { title: 'Book Store', genres });
    } catch (err) {
        console.error(err);
    }
}

async function addGenre(req, res) {
    try {
        await db.insertGenres(req.body.genre);
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error saving genre");
    }
}

module.exports = { 
    getAllGenres,
    addGenre
};