const productServices = require('../services/ProductServices');

function productSearch(req, res){
    const returnFromService = productServices.productSearch(req);
    return res.status(200).json(returnFromService);
}

module.exports = {
    productSearch: productSearch
  }
  