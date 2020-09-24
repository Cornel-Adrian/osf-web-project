const { axiosInstance, SECRETKEYURL } = require("../helpers/HttpRequests");

async function getCategoryById(req, res, next) {
    let categoryId;
    if (!req.query) {
        categoryId = 'mens';
    }
    else {
        categoryId = req.query.category;
    }

    let categoryIdRequest;
    await axiosInstance.get("/categories/" + categoryId + "?" + SECRETKEYURL).then((response) => {
        categoryIdRequest = response.data;
    }).catch((error) => {
        categoryIdRequest='';
        next(error);
    });
    return categoryIdRequest;
}

async function getCategoriesByParentId(req, res, next) {
    let parentId;
    if (!req.query.category) {
        parentId = "mens";
    }
    else {
        parentId = req.query.category;
    }

    let categoryParentIdRequest;
    await axiosInstance.get("/categories/parent/" + parentId + "?" + SECRETKEYURL).then((response) => {
        categoryParentIdRequest = response.data;
    }).catch((error) => {
        categoryParentIdRequest='';
        next(error);
    });
    return categoryParentIdRequest;
}

async function getAllCategories(req, res, next) {
    let categories;
    await axiosInstance.get("categories?" + SECRETKEYURL).then((response) => {
        categories = response.data;
    }).catch((error) => {
        next(error);
    });
    return categories;

}

module.exports = {
    getCategoryById: getCategoryById,
    getCategoriesByParentId: getCategoriesByParentId,
    getAllCategories: getAllCategories
}
