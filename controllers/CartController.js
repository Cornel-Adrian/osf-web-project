const cartServices = require('../services/CartServices');

async function getCart(req, res, next) {
    const cart = await cartServices.getCart(req, res, next);
    return res.render('cart', { cart: cart});
}

async function deleteItemFromCart(req, res, next) {
    await cartServices.removeItem(req, res, next);
    return res.render('cart');
}

async function changeItemQuantity(req, res, next) {
    await cartServices.changeItemQuantity(req, res, next);
    return res.render('cart');
}


module.exports = {
    getCart: getCart,
    deleteItemFromCart: deleteItemFromCart,
    changeItemQuantity: changeItemQuantity
}