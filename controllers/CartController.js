const cartServices = require('../services/CartServices');

async function getCart(req, res, next) {
    const cart = await cartServices.getCart(req, res, next);
    return res.render('cart', { cart: cart});
}

async function addItemToCart(req, res, next) {
    await cartServices.addItemToCart(req, res, next);
    return res.redirect('cart');
}

async function deleteItemFromCart(req, res, next) {
    await cartServices.removeItem(req, res, next);
    return res.redirect('/');
}

async function changeItemQuantity(req, res, next) {
    await cartServices.changeItemQuantity(req, res, next);
    return res.redirect('/');
}


module.exports = {
    getCart: getCart,
    addItemToCart: addItemToCart,
    deleteItemFromCart: deleteItemFromCart,
    changeItemQuantity: changeItemQuantity
}