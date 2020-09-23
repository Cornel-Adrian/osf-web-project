const express = require('express')
const routes = express.Router();
const ProductController = require('../controllers/ProductController');

routes.get('/product_search', ProductController.productSearch);
routes.get('/:id', ProductController.getProductById);

module.exports = routes;