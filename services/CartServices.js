const { axiosInstance, SECRETKEYURL, getHeader, SECRETKEY } = require("../helpers/HttpRequests");


async function getCart(req, res, next) {
    let cart;
    let header = getHeader(req.cookies.token);
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

async function updateItemFromCart(req, res, next){
    if(!req.body){return next();}
    let header = getHeader(req.cookies.token);
    if(req.body.vote)
    {
        if(req.body.vote == "update"){
            await axiosInstance.post("cart/changeItemQuantity", {
                secretKey: SECRETKEY,
                productId: req.body.productId,
                variantId: req.body.variantId,
                quantity: req.body.quantity
            }, {
                headers: header
            }).then((response) => {
            }).catch((error) => {
                next(error);
            });
        }
        if(req.body.vote == "remove")
        {
            await axiosInstance.delete("cart/removeItem", {
                secretKey: SECRETKEY,
                productId: req.body.productId,
                variantId: req.body.variantId
            }, {
                headers: header
            }).then((response) => {
            }).catch((error) => {
                console.log(error.response);
                next(error);
            });
        }
    }
}


module.exports = {
    getCart: getCart,
    updateItemFromCart: updateItemFromCart
}
