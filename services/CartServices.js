const { axiosInstance, SECRETKEYURL, getHeader, SECRETKEY } = require("../helpers/HttpRequests");


async function getCart(req, res, next) {
    let cart;
    let header = getHeader(req.cookies.token) || "";
    await axiosInstance.get("cart?" + SECRETKEYURL, {
        headers: header
    }).then((response) => {
        return cart = response.data.items;
    }).catch((error) => {
        cart = [];
    }).then(() => {
        return cart;
    });
    return cart;
}

async function addItemToCart(req, res, next) {
    if (!req.body) { return next(); }
    let header = getHeader(req.cookies.token);
    await axiosInstance.post('/cart/addItem', {
        secretKey: SECRETKEY,
        productId: req.body.productId,
        variantId: req.body.variantId,
        quantity: req.body.quantity
    }, {
        headers: header
    }).then((response) => {
    }).catch((error) => {
        next(error);
    })
}

async function removeItem(req, res, next) {
    if (!req.body) { return next(); }
    let header = getHeader(req.cookies.token) || '';
    await axiosInstance.delete("cart/removeItem", {
        secretKey: SECRETKEY,
        productId: req.body.productId,
        variantId: req.body.variantId
    }, {
        headers: header
    }).then((response) => {
        removeItemRequest = response.data;
    }).catch((error) => {
        next(error);
    });
}


async function changeItemQuantity(req, res, next) {
    if (!req.body) { return next(); }
    let header = getHeader(req.cookies.token) || '';
    await axiosInstance.post("cart/changeItemQuantity", {
        secretKey: SECRETKEY,
        productId: req.body.productId,
        variantId: req.body.variantId
    }, {
        headers: header
    }).then((res) => {
        createOrderRequest = res.data;
    }).catch((error) => {
        next(error);
    });
}



module.exports = {
    getCart: getCart,
    addItemToCart: addItemToCart,
    removeItem: removeItem,
    changeItemQuantity, changeItemQuantity
}
