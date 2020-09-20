const express = require('express')
const routes = express.Router();
const CartController = require('../controllers/CartController');
const { validateCookies } = require('../helpers/HttpRequests');

routes.get('/', validateCookies, CartController.getCart);
routes.post('/addItem', validateCookies, CartController.addItemToCart);
routes.delete('/removeItem', validateCookies, CartController.deleteItemFromCart);
routes.post('/changeItemQuantity', validateCookies, CartController.changeItemQuantity);

module.exports = routes;