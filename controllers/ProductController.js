const productServices = require('../services/ProductServices');

function productSearch(req, res){
    const returnFromService = productServices.productSearch(req.query['secretKey'],req.query['id'],req.query['primary_category_id']);
    return res.status(200).json(returnFromService);
}

module.exports = {
    productSearch: productSearch
  }
  