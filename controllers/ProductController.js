const productServices = require('../services/ProductServices');

async function productSearch(req, res, next){
    const products = await productServices.productSearch(req, res, next);
    return res.render('products', {products: products});
}

async function getProductById(req, res, next){
    const product = await productServices.getProductById(req, res, next);
    return res.render('product', {product: product});
}

module.exports = {
    productSearch: productSearch,
    getProductById:getProductById
  }
  