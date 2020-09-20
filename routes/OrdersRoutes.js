const express = require('express')
const routes = express.Router();
const OrdersController = require('../controllers/OrdersController');
const { validateCookies } = require('../helpers/HttpRequests');

routes.get('/', validateCookies, OrdersController.getOrders);
routes.post('/', validateCookies, OrdersController.createOrder);

module.exports = routes;