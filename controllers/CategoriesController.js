const categoriesServices = require('../services/CategoriesServices');

async function getCategoryByID (req, res,next){
    const returnFromService = await categoriesServices.getCategoryById(req.params.id, req.query["secretKey"]);
    if (returnFromService)
    {
        return res.status(200).json(returnFromService);
    }
    else
    {
        res.status(404).json({message:"Category not found"});
    }
    
}

async function getCategoryByParentID(req, res, next){
    const returnFromService = await categoriesServices.getCategoriesByParentId(req.params.id, req.query["secretKey"]);
    return res.status(200).json(returnFromService);
}

async function getAllCategories(req, res, next){
    const returnFromService = await categoriesServices.getAllCategories();
    return res.status(200).json(returnFromService);
}

module.exports = {
    getCategoryByID: getCategoryByID,
    getCategoryByParentID: getCategoryByParentID,
    getAllCategories: getAllCategories
  }