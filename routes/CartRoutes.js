const express = require('express')
const routes = express.Router();
const CartController = require('../controllers/CartController');
const { validateCookies } = require('../helpers/HttpRequests');

routes.get('/', validateCookies, CartController.getCart);
routes.post('/', validateCookies, CartController.updateItemFromCart);

module.exports = routes;