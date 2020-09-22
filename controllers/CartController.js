const cartServices = require('../services/CartServices');

async function getCart(req, res) {
    const cart = await cartServices.getCart(req);
    return res.render('cart', { cart: cart});
}

async function addItemToCart(req, res) {
    await cartServices.addItemToCart(req);
    return res.redirect('cart');
}

async function deleteItemFromCart(req, res) {
    await cartServices.removeItem(req);
    return res.redirect('cart');
}

async function changeItemQuantity(req, res) {
    await cartServices.changeItemQuantity(req);
    return res.redirect('cart');
}


module.exports = {
    getCart: getCart,
    addItemToCart: addItemToCart,
    deleteItemFromCart: deleteItemFromCart,
    changeItemQuantity: changeItemQuantity
}