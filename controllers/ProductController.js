const productServices = require('../services/ProductServices');
const cartServices = require('../services/CartServices');

// async function productSearch(req, res, next){
//     const products = await productServices.productSearch(req, res, next);
//     return res.render('products', {products: products});
// }

async function getProductById(req, res, next){
    const product = await productServices.getProductById(req, res, next);
    return res.render('product', {product: product});
}

async function buyProduct(req,res,next)
{
    console.log('Req'+ req.body);
    await cartServices.addItemToCart(req, res, next);
    return res.redirect('/');
}

module.exports = {
    // productSearch: productSearch,
    getProductById:getProductById,
    buyProduct:buyProduct
  }
  