const productServices = require('../services/ProductServices');

function productSearch(req, res){
    const products = productServices.productSearch(req);
    return res.render('products', {products: products});
}

module.exports = {
    productSearch: productSearch
  }
  