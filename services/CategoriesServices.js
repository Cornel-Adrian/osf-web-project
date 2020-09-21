const { axiosInstance, SECRETKEYURL } = require("../helpers/HttpRequests");

async function getCategoryById(req) {
    let categoryId = req.params.id;
    let categoryIdRequest;
    await axiosInstance.get("/categories/" + categoryId + "?" + SECRETKEYURL).then((res) => {
        categoryIdRequest = res.data;
    }).catch((error) => {
        res.render('error', { error: error });
    });
    return categoryIdRequest;
}

async function getCategoriesByParentId(req) {
    let parentId = req.params.id;
    let categoryParentIdRequest;
    await axiosInstance.get("/categories/parent/" + parentId + "?" + SECRETKEYURL).then((res) => {
        categoryParentIdRequest = res.data;
    }).catch((error) => {
        res.render('error', { error: error });
    });
    return categoryParentIdRequest;
}

async function getAllCategories(req) {
    let categories;
    await axiosInstance.get("categories?" + SECRETKEYURL).then((res) => {
        categories = res.data;
    }).catch((error) => {
        res.render('error', { error: error });
    });
    return categories;

}

module.exports = {
    getCategoryById: getCategoryById,
    getCategoriesByParentId: getCategoriesByParentId,
    getAllCategories: getAllCategories
}
