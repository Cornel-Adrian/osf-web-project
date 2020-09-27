const express = require('express')
const routes = express.Router();
const MainController = require('../controllers/MainController');


routes.get('/subcategory/:id', MainController.getSubCategoriesElements);
routes.get('/category/:id', MainController.getCategoryProducts);

module.exports = routes;