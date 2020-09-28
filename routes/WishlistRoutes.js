const express = require('express')
const routes = express.Router();
const WishlistController = require('../controllers/WishlistController');
const { validateCookies } = require('../helpers/HttpRequests');

routes.get('/', validateCookies, WishlistController.getWishlist);
routes.post('/', validateCookies ,WishlistController.updateItemFromWishlist);

module.exports = routes;