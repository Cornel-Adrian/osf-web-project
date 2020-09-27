const { axiosInstance, SECRETKEYURL, getHeader, getHeaderWithJson, SECRETKEY } = require("../helpers/HttpRequests");


async function getWishlist(req, res, next) {
    let wishlist;
    let token = getHeader(req.cookies.token);
    await axiosInstance.get("wishlist?" + SECRETKEYURL, {
        headers: token
    }).then((response) => {
        wishlist = response.data.items;
    }).catch((error) => {
        wishlist = [];
    });
    return wishlist;
}

async function addItemToWishlist(req, res, next) {
    console.log("In wishlist service ..");
    console.log(req.body);
    if (!req.body) { return next(); }
    let header = getHeaderWithJson(req.cookies.token);
    await axiosInstance(
        {
            method: 'post',
            url: '/wishlist/addItem',
            data: {
                secretKey: SECRETKEY,
                productId: req.body.productId,
                variantId: req.body.variantId,
                quantity: req.body.quantity
            },
            headers: header
        }
    ).then((response) => {
    }).catch((error) => {
        next(error);
    });
}

async function removeItemFromWishlist(req, res, next) {
    if (!req.body) { return next(); }
    let removeItemFromWishlistRequest;
    let header = getHeaderWithJson(req.cookies.token);
    await axiosInstance.delete("wishlist/removeItem", {
        secretKey: SECRETKEY,
        productId: req.body.productId,
        variantId: req.body.variantId
    }, {
        headers: header
    }).then((response) => {
        removeItemFromWishlistRequest = response.data;
    }).catch((error) => {
        next(error);
    });
}


async function changeItemQuantityWishlist(req, res, next) {
    if (!req.body) { return next(); }
    let header = getHeaderWithJson(req.cookies.token);
    await axiosInstance.post("wishlist/changeItemQuantity", {
        secretKey: SECRETKEY,
        productId: req.body.productId,
        variantId: req.body.variantId
    }, {
        headers: header
    }).then((response) => {
    }).catch((error) => {
        next(error);
    });
}



module.exports = {
    getWishlist: getWishlist,
    addItemToWishlist: addItemToWishlist,
    removeItemFromWishlist: removeItemFromWishlist,
    changeItemQuantityWishlist: changeItemQuantityWishlist
}
