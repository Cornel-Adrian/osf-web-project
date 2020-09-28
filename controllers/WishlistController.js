const wishlistServices = require('../services/WishlistServices');

async function getWishlist(req, res, next) {
    const wishlist = await wishlistServices.getWishlist(req, res, next);
    return res.render('wishlist', { wishlist: wishlist});
}

async function updateItemFromWishlist(req, res,next)
{
    await wishlistServices.updateItemFromWishlist(req,res,next)
    return res.redirect('/wishlist');
}


module.exports = {
    getWishlist: getWishlist,
    updateItemFromWishlist: updateItemFromWishlist
}