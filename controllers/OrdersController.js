const ordersServices = require('../services/OrdersServices');
const cartServices = require('../services/CartServices');

async function getOrders(req, res, next) {
    const orders = await ordersServices.getOrders(req, res, next);
    return res.render('orders', { orders: orders });
}

async function createOrder(req, res, next) {
    await ordersServices.createOrder(req, res, next);
    return res.redirect('/orders');
}

async function checkout(req, res, next) {
    const cart = await cartServices.getCart(req, res, next);
    return res.render('checkout', {cart: cart});
}

module.exports = {
    getOrders: getOrders,
    createOrder: createOrder,
    checkout: checkout
}