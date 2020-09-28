const express = require('express')
const routes = express.Router();
const ProductController = require('../controllers/ProductController');
const { validateCookies } = require('../helpers/HttpRequests');


routes.get('/:id', ProductController.getProductById);
routes.post('/:id', validateCookies, ProductController.addProduct);


module.exports = routes;