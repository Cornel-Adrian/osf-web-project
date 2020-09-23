const ordersServices = require('../services/OrdersServices');

async function getOrders(req, res, next){
    const orders = await ordersServices.getOrders(req, res, next);
    return res.render('orders', {orders: orders});
}

async function createOrder(req, res, next){
    await ordersServices.createOrder(req, res, next);
    return res.redirect('orders');
}

module.exports = {
    getOrders: getOrders,
    createOrder: createOrder
}