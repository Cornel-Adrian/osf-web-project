const { axiosInstance, SECRETKEYURL } = require("../helpers/HttpRequests");

async function getCategoryById(req, res, next) {
    let categoryId = req.params.id;
    let categoryIdRequest;
    await axiosInstance.get("/categories/" + categoryId + "?" + SECRETKEYURL).then((response) => {
        categoryIdRequest = response.data;
    }).catch((error) => {
        next(error);
        res.render('error', {error: error.response.data.error});
    });
    return categoryIdRequest;
}

async function getCategoriesByParentId(req, res, next) {
    let parentId = req.params.id;
    let categoryParentIdRequest;
    await axiosInstance.get("/categories/parent/" + parentId + "?" + SECRETKEYURL).then((response) => {
        categoryParentIdRequest = response.data;
    }).catch((error) => {
        next(error);
        res.render('error', {error: error.response.data.error});
    });
    return categoryParentIdRequest;
}

async function getAllCategories(req, res, next) {
    let categories;
    await axiosInstance.get("categories?" + SECRETKEYURL).then((response) => {
        categories = response.data;
    }).catch((error) => {
        next(error);
        res.render('error', {error: error.response.data.error});
    });
    return categories;

}

module.exports = {
    getCategoryById: getCategoryById,
    getCategoriesByParentId: getCategoriesByParentId,
    getAllCategories: getAllCategories
}
