const ordersServices = require('../services/OrdersServices');

async function getOrders(req, res){
    const orders = await ordersServices.getOrders(req);
    return res.render('orders', {orders: orders});
}

async function createOrder(req, res){
    const createOrder = await ordersServices.createOrder(req);
    return res.redirect('orders');
}

module.exports = {
    getOrders: getOrders,
    createOrder: createOrder
}