const categoriesServices = require('../services/CategoriesServices');
const productServices = require('../services/ProductServices');

async function getMainCategoryElements(req, res, next) {
    const mainCategory = await categoriesServices.getCategoryById(req, res, next);
    const subCategories = await categoriesServices.getCategoriesByParentId(req, res, next);
    return res.render('index', { mainCategory: mainCategory, subCategories: subCategories });
}

async function getSubCategoriesElements(req, res, next) {
    const mainCategory = await categoriesServices.getCategoryById(req, res, next);
    const subCategories = await categoriesServices.getCategoriesByParentId(req, res, next);
    return res.render('subcategory', { mainCategory: mainCategory, subCategories: subCategories });
}

async function getCategoryProducts(req, res, next) {
    const category = await categoriesServices.getCategoryById(req, res, next);
    const products = await productServices.getProductByParentId(req, res, next);
    return res.render('category', { category: category, products: products });
}

module.exports = {
    getMainCategoryElements: getMainCategoryElements,
    getSubCategoriesElements: getSubCategoriesElements,
    getCategoryProducts: getCategoryProducts
}
