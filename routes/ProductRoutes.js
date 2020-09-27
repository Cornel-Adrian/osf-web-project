const express = require('express')
const routes = express.Router();
const ProductController = require('../controllers/ProductController');
const WishlistController = require('../controllers/WishlistController');
const { validateCookies } = require('../helpers/HttpRequests');

//routes.get('/product_search', ProductController.productSearch);
routes.get('', ProductController.getProductById);
routes.post('', validateCookies, ProductController.buyProduct);
routes.post('/addItem', validateCookies, WishlistController.addItemToWishlist);


module.exports = routes;