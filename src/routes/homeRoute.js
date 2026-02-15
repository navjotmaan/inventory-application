const { Router } = require('express');
const homeRouter = Router();

const homeController = require('../controllers/homeController');

homeRouter.get('/', homeController.getAllGenres);
homeRouter.post('/', homeController.addGenre);
homeRouter.post('/genre/update', homeController.updateGenreName);
homeRouter.post('/genre/delete', homeController.deleteGenre);

module.exports = homeRouter;