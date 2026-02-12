const { Router } = require('express');
const homeRouter = Router();

const homeController = require('../controllers/homeController');

homeRouter.get('/', homeController.getAllGenres);
homeRouter.post('/', homeController.addGenre);

module.exports = homeRouter;