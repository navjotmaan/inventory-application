const { Router } = require('express');
const booksRouter = Router();

const booksController = require('../controllers/booksController');

booksRouter.get('/:id', booksController.getAllBooks);
booksRouter.post('/:id', booksController.addBook);

module.exports = booksRouter;