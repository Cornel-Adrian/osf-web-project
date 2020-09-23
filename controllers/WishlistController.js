const wishlistServices = require('../services/WishlistServices');

async function getWishlist(req, res, next) {
    const wishlist = await wishlistServices.getWishlist(req, res, next);
    return res.render('wishlist', { wishlist: wishlist});
}

async function addItemToWishlist(req, res, next) {
    await wishlistServices.addItemToWishlist(req, res, next);
    return res.redirect('/');
}

async function deleteItemFromWishlist(req, res, next) {
    await wishlistServices.removeItemFromWishlist(req, res, next);
    return res.redirect('/');
}

async function changeItemQuantity(req, res, next) {
    await wishlistServices.changeItemQuantityWishlist(req, res, next);
    return res.redirect('/');
}


module.exports = {
    getWishlist: getWishlist,
    addItemToWishlist: addItemToWishlist,
    deleteItemFromWishlist: deleteItemFromWishlist,
    changeItemQuantity: changeItemQuantity
}