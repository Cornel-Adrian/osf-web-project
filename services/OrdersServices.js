const { axiosInstance, SECRETKEYURL, getHeader, SECRETKEY } = require("../helpers/HttpRequests");
const cartServices = require('../services/CartServices');

async function getOrders(req) {
    let orderResponse;
    let header = getHeader(req.cookies.token);
    await axiosInstance.get("orders?" + SECRETKEYURL, {
        headers: header
    }).then((res) => {
        orderResponse = res.data;
    }).catch((error) => {
        if (error.response.data.error == 'There are no orders for this user') {
            return orderResponse;
        }
        throw new Error(error);
    });
    return orderResponse;
}

async function createOrder(req) {
    // import cart items
    let cart = await cartServices.getCart(req);
    let orderCreateResponse;
    let header = getHeader(req.cookies.token);
    console.log(header)
    console.log(cart);
    try {
        await axiosInstance.post('/orders', {
            secretKey: SECRETKEY,
            address: req.body.address,
            paymentId: req.body.paymentId,
            items: cart
        }, { headers: header }
        ).then((res) => {
            orderCreateResponse = res.data;
        }).catch((error) => {
            console.log(error.response)
        })
    }
    catch (error) {
        throw new Error(error);
    }
    return orderCreateResponse;
}


module.exports = {
    getOrders: getOrders,
    createOrder: createOrder

}
