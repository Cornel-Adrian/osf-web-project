const productServices = require('../services/ProductServices');


async function getProductById(req, res, next) {
    const product = await productServices.getProductById(req, res, next);
    return res.render('product', { product: product });
}

async function addProduct(req, res, next) {
    await productServices.addItem(req, res, next);
    return res.redirect('/');
}

async function addItemToWishlist(req, res, next) {
    await wishlistServices.addItemToWishlist(req, res, next);
    return res.redirect('/');
}

module.exports = {
    getProductById: getProductById,
    addProduct: addProduct,
    addItemToWishlist: addItemToWishlist
}
