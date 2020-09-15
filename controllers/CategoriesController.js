const categoriesServices = require('../services/CategoriesServices');

async function getCategoryByID (req, res){
    const category = await categoriesServices.getCategoryById(req);
    return res.render('category', {category : category});
}

async function getCategoryByParentID(req, res){
    const categories = await categoriesServices.getCategoriesByParentId(req);
    return res.render('categories', {categories : categories});
}

async function getAllCategories(req, res){
    const categories = await categoriesServices.getAllCategories(req);
    return res.render('categories', {categories : categories});
}

module.exports = {
    getCategoryByID: getCategoryByID,
    getCategoryByParentID: getCategoryByParentID,
    getAllCategories: getAllCategories
  }