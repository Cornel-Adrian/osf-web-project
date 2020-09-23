const categoriesServices = require('../services/CategoriesServices');

async function getCategoryByID(req, res, next) {
    const category = await categoriesServices.getCategoryById(req, res, next);
    return res.render('category', { category: category});
}

async function getCategoryByParentID(req, res, next) {
    const categories = await categoriesServices.getCategoriesByParentId(req, res, next);
    return res.render('categories', { categories: categories});
}

async function getAllCategories(req, res, next) {
    const categories = await categoriesServices.getAllCategories(req, res, next);
    return res.render('categories', { categories: categories});
}

module.exports = {
    getCategoryByID: getCategoryByID,
    getCategoryByParentID: getCategoryByParentID,
    getAllCategories: getAllCategories
}