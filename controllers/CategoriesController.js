const categoriesServices = require('../services/CategoriesServices');

async function getCategoryByID (req, res,next){
    const returnFromService = await categoriesServices.getCategoryById(req);
    return res.status(200).json(returnFromService);
}

async function getCategoryByParentID(req, res, next){
    const returnFromService = await categoriesServices.getCategoriesByParentId(req);
    return res.status(200).json(returnFromService);
}

async function getAllCategories(req, res, next){
    const returnFromService = await categoriesServices.getAllCategories(req);
    return res.status(200).json(returnFromService);
}

module.exports = {
    getCategoryByID: getCategoryByID,
    getCategoryByParentID: getCategoryByParentID,
    getAllCategories: getAllCategories
  }