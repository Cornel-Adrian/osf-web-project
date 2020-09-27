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

async function updateItemFromWishlist(req, res, next) {
    if (!req.body) { return next(); }
    let header = getHeader(req.cookies.token);
    if (req.body.vote) {
        if (req.body.vote == "update") {
            await axiosInstance.post("wishlist/changeItemQuantity", {
                secretKey: SECRETKEY,
                productId: req.body.productId,
                variantId: req.body.variantId,
                quantity: req.body.quantity
            }, {
                headers: header
            }).then((response) => {
            }).catch((error) => {
                return next(error);
            });
        }
        if (req.body.vote == "remove") {
            await axiosInstance.delete("wishlist/removeItem", {
                secretKey: SECRETKEY,
                productId: req.body.productId,
                variantId: req.body.variantId
            }, {
                headers: header
            }).then((response) => {
            }).catch((error) => {
                return next(error);
            });
        }
    }
}


module.exports = {
    getWishlist: getWishlist,
    updateItemFromWishlist: updateItemFromWishlist
}
