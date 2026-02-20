const { Router } = require('express');
const booksRouter = Router();

const booksController = require('../controllers/booksController');

booksRouter.get('/:id', booksController.getAllBooks);
booksRouter.post('/:id', booksController.addBook);
booksRouter.post('/:id/:bookId/delete', booksController.deleteBook);
booksRouter.post('/:id/:bookId/update', booksController.updateBook);

module.exports = booksRouter;