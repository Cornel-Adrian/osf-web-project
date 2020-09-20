const express = require('express')
const routes = express.Router();
const WishlistController = require('../controllers/WishlistController');
const { validateCookies } = require('../helpers/HttpRequests');

routes.get('/', validateCookies, WishlistController.getWishlist);
routes.post('/addItem', validateCookies, WishlistController.addItemToWishlist);
routes.delete('/removeItem',validateCookies, WishlistController.deleteItemFromWishlist);
routes.post('/changeItemQuantity', validateCookies ,WishlistController.changeItemQuantity);

module.exports = routes;