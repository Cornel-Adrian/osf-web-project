const { axiosInstance, SECRETKEYURL, getHeader, SECRETKEY } = require("../helpers/HttpRequests");


async function getWishlist(req, res) {
    let wishlist;
    let token = req.cookies.token;
    console.log(token);
    await axiosInstance.get("wishlist?" + SECRETKEYURL, {
        headers: { 'Authorization': token }
    }).then((response) => {
        wishlist = response.data;
        console.log(wishlist);
    }).catch((error) => {
        res.render('error', {error: error});
    });
    return wishlist;
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
    let header = getHeader(req.session.token);
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
