const { axiosInstance, SECRETKEYURL, getHeader, SECRETKEY } = require("../helpers/HttpRequests");


async function getOrders(req) {
    let wishListResponse;
    let header = getHeader(req.session.token);
    await axiosInstance.get("orders?" + SECRETKEYURL, {
        headers: header
    }).then((res) => {
        wishListResponse = res.data;
    }).catch((error) => {
    });
    return wishListResponse;
}

async function addItemToWishlist(req) {
    let addingItemToWishlistRequest;
    let header = getHeader(req.session.token);
    await axiosInstance.post('wishlist/addItem', {
        secretKey: SECRETKEY,
        productId: req.body.productId,
        variantId: req.body.variantId,
        quantity: req.body.quantity
    }, {
        headers: header
    }).then((res) => {
        addingItemToWishlistRequest = res.data;
        console.log(addingItemToWishlistRequest);
    }).catch((error) => { })
    return addingItemToWishlistRequest;
}

async function removeItemFromWishlist(req) {
    let removeItemFromWishlistRequest;
    let header = getHeader(req.session.token);
    await axiosInstance.delete("/wishlist/removeItem", {
        secretKey: SECRETKEY,
        productId: req.body.productId,
        variantId: req.body.variantId
    }, {
        headers: header
    }).then((res) => {
        removeItemFromWishlistRequest = res.data;
    }).catch((error) => {
    });
    return removeItemFromWishlistRequest;
}


async function changeItemQuantityWishlist(req) {
    let createOrderRequest;
    let header = getHeader(req.session.token);
    await axiosInstance.post("/wishlist/changeItemQuantity", {
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
    getOrders: getOrders,
    addItemToWishlist: addItemToWishlist,
    removeItemFromWishlist: removeItemFromWishlist,
    changeItemQuantityWishlist: changeItemQuantityWishlist

}
