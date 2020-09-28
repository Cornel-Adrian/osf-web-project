const cartServices = require('../services/CartServices');

async function getCart(req, res, next) {
    const cart = await cartServices.getCart(req, res, next);
    return res.render('cart', { cart: cart });
}

async function updateItemFromCart(req, res, next) {
    await cartServices.updateItemFromCart(req, res, next);
    return res.redirect('/cart');
}


module.exports = {
    getCart: getCart,
    updateItemFromCart: updateItemFromCart
}