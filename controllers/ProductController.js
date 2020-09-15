const productServices = require('../services/ProductServices');

async function productSearch(req, res){
    const products = await productServices.productSearch(req, res);
    return res.render('products', {products: products});
}

module.exports = {
    productSearch: productSearch
  }
  