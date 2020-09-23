const { axiosInstance, SECRETKEYURL, getHeader, SECRETKEY } = require("../helpers/HttpRequests");
const cartServices = require('../services/CartServices');

async function getOrders(req, res, next) {
    let orderResponse;
    let header = getHeader(req.cookies.token);
    await axiosInstance.get("orders?" + SECRETKEYURL, {
        headers: header
    }).then((res) => {
        orderResponse = res.data;
    }).catch((error) => {
        next(error);
        res.render('error', {error: error.response.data.error});
    });
    return orderResponse;
}

async function createOrder(req, res, next) {
    // import cart items
    let cart = await cartServices.getCart(req);
    let orderCreateResponse;
    let header = getHeader(req.cookies.token);
    await axiosInstance.post('/orders', {
        secretKey: SECRETKEY,
        address: req.body.address,
        paymentId: req.body.paymentId,
        items: cart
    }, { headers: header }
    ).then((response) => {
        orderCreateResponse = response.data;
    }).catch((error) => {
        next(error);
        res.render('error', {error: error.response.data.error});
    })

}


module.exports = {
    getOrders: getOrders,
    createOrder: createOrder

}
