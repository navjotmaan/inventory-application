const { Router } = require('express');
const homeRouter = Router();

const homeController = require('../controllers/homeController');

homeRouter.get('/', homeController.getAllGenres);
homeRouter.post('/', homeController.addGenre);
homeRouter.post('/update', homeController.updateGenreName);
homeRouter.post('/delete', homeController.deleteGenre);

module.exports = homeRouter;