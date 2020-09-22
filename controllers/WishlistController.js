const wishlistServices = require('../services/WishlistServices');

async function getWishlist(req, res) {
    const wishlist = await wishlistServices.getWishlist(req);
    return res.render('wishlist', { wishlist: wishlist});
}

async function addItemToWishlist(req, res) {
    await wishlistServices.addItemToWishlist(req);
    return res.redirect('/');
}

async function deleteItemFromWishlist(req, res) {
    await wishlistServices.removeItemFromWishlist(req, res);
    return res.redirect('/');
}

async function changeItemQuantity(req, res) {
    await wishlistServices.changeItemQuantityWishlist(req, res);
    return res.redirect('/');
}


module.exports = {
    getWishlist: getWishlist,
    addItemToWishlist: addItemToWishlist,
    deleteItemFromWishlist: deleteItemFromWishlist,
    changeItemQuantity: changeItemQuantity
}