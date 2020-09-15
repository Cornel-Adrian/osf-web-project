const express = require('express')
const routes = express.Router();
const CategoriesController = require('../controllers/CategoriesController');

routes.get('/:id', CategoriesController.getCategoryByID);
routes.get('/parent/:id', CategoriesController.getCategoryByParentID);
routes.get('', CategoriesController.getAllCategories);

module.exports = routes;