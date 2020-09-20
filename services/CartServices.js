const { axiosInstance, SECRETKEYURL, getHeader, SECRETKEY } = require("../helpers/HttpRequests");


async function getCart(req) {
    let cart;
    let token = req.cookies.token;
    await axiosInstance.get("cart?" + SECRETKEYURL, {
        headers: {
            'Authorization': token
        }
    }).then((res) => {
        cart = res.data;
    }).catch((error) => {
        throw new Error (error);
    });
    return cart;
}

async function addItemToCart(req) {
    let addingItemRequest;
    let header = getHeader(req.session.token);
    await axiosInstance.post('cart/addItem', {
        secretKey: SECRETKEY,
        productId: req.body.productId,
        variantId: req.body.variantId,
        quantity: req.body.quantity
    }, {
        headers: header
    }).then((res) => {
        addingItemRequest = res.data;
        console.log(addingItemRequest);
    }).catch((error) => { })
    return addingItemRequest;
}

async function removeItem(req) {
    let removeItemRequest;
    let header = getHeader(req.session.token);
    await axiosInstance.delete("cart/removeItem", {
        secretKey: SECRETKEY,
        productId: req.body.productId,
        variantId: req.body.variantId
    }, {
        headers: header
    }).then((res) => {
        removeItemRequest = res.data;
    }).catch((error) => {
    });
    return removeItemRequest;
}


async function changeItemQuantity(req) {
    let createOrderRequest;
    let header = getHeader(req.session.token);
    await axiosInstance.post("cart/changeItemQuantity", {
        secretKey: SECRETKEY,
        productId: req.body.productId,
        variantId: req.body.variantId
    }, {
        headers: header
    }).then((res) => {
        createOrderRequest = res.data;
    }).catch((error) => {
    });
    return createOrderRequest;
}



module.exports = {
    getCart: getCart,
    addItemToCart: addItemToCart,
    removeItem: removeItem,
    changeItemQuantity, changeItemQuantity
}
