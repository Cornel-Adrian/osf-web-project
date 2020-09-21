const { axiosInstance, SECRETKEYURL, getHeader, SECRETKEY } = require("../helpers/HttpRequests");


async function getWishlist(req) {
    let wishlist;
    let token = getHeader(req.cookies.token);
    await axiosInstance.get("wishlist?" + SECRETKEYURL, {
        headers: token
    }).then((response) => {
        wishlist = response.data;
    }).catch((error) => {
        if (error.response.data.error == 'There is no wishlist created for this user') {
            return wishlist;
        }
        throw new Error(error);
    });
    return wishlist;
}

async function addItemToWishlist(req) {
    let addingItemToWishlistRequest;
    let header = getHeader(req.cookies.token);
    await axiosInstance.post('wishlist/addItem', {
        secretKey: SECRETKEY,
        productId: req.body.productId,
        variantId: req.body.variantId,
        quantity: req.body.quantity
    }, {
        headers: header
    }).then((res) => {
        addingItemToWishlistRequest = res.data;
    }).catch((error) => { })
    return addingItemToWishlistRequest;
}

async function removeItemFromWishlist(req) {
    let removeItemFromWishlistRequest;
    let header = getHeader(req.cookies.token);
    await axiosInstance.delete("wishlist/removeItem", {
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
    let header = getHeader(req.cookies.token);
    await axiosInstance.post("wishlist/changeItemQuantity", {
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
    getWishlist: getWishlist,
    addItemToWishlist: addItemToWishlist,
    removeItemFromWishlist: removeItemFromWishlist,
    changeItemQuantityWishlist: changeItemQuantityWishlist
}
