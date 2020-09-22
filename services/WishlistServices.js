const { axiosInstance, SECRETKEYURL, getHeader, getHeaderWithJson, SECRETKEY } = require("../helpers/HttpRequests");


async function getWishlist(req) {
    let wishlist;
    let token = getHeader(req.cookies.token);
    await axiosInstance.get("wishlist?" + SECRETKEYURL, {
        headers: token
    }).then((response) => {
        wishlist = response.data.items;
        console.log(wishlist);
    }).catch((error) => {
        if (error.response.data.error == 'There is no wishlist created for this user') {
            return wishlist;
        }
        throw new Error(error);
    });
    return wishlist;
}

async function addItemToWishlist(req) {
    let header = getHeaderWithJson(req.cookies.token);
    await axiosInstance(
        {
            method:'post',
            url:'/wishlist/addItem',
            data:{
                secretKey: SECRETKEY,
                productId: req.body.productId,
                variantId: req.body.variantId,
                quantity: req.body.quantity
            },
            headers: header
        }
    ).then((res) => {
        console.log(res.data);
    }).catch((error) => { throw new Error(error) });
}

async function removeItemFromWishlist(req) {
    let removeItemFromWishlistRequest;
    let header = getHeaderWithJson(req.cookies.token);
    await axiosInstance.delete("wishlist/removeItem", {
        secretKey: SECRETKEY,
        productId: req.body.productId,
        variantId: req.body.variantId
    }, {
        headers: header
    }).then((res) => {
        removeItemFromWishlistRequest = res.data;
    }).catch((error) => {
        throw new Error(error);
    });
}


async function changeItemQuantityWishlist(req) {
    let header = getHeaderWithJson(req.cookies.token);
    await axiosInstance.post("wishlist/changeItemQuantity", {
        secretKey: SECRETKEY,
        productId: req.body.productId,
        variantId: req.body.variantId
    }, {
        headers: header
    }).then((res) => {
    }).catch((error) => {
        throw new Error(error);
    });
}



module.exports = {
    getWishlist: getWishlist,
    addItemToWishlist: addItemToWishlist,
    removeItemFromWishlist: removeItemFromWishlist,
    changeItemQuantityWishlist: changeItemQuantityWishlist
}
