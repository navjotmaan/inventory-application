const db = require('../queries/genres');
const booksdb = require('../queries/books');

async function getAllGenres(req, res) {
    try {
        const genres = await db.getAllGeneres();
        res.render('home', { title: 'Book Store', genres });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error loading genres");
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

async function updateGenreName(req, res) {
    try {
        const id = req.body.id;
        const genre = req.body.genre;

        await db.updateGenre(genre, id);
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating genre");
    }
}

async function deleteGenre(req, res) {
    try {
        await booksdb.deleteAllBooks(req.body.id);
        await db.deleteGenre(req.body.id);

        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting genre");
    }
}

module.exports = { 
    getAllGenres,
    addGenre,
    updateGenreName,
    deleteGenre
};