const { axiosInstance, SECRETKEYURL } = require("../helpers/HttpRequests");

async function getCategoryById(req, res, next) {
    let categoryId;
    let categoryIdRequest;
    if (!req.params) {
        categoryId = 'mens';
    }
    else {
        categoryId = req.params.id;
    }

    await axiosInstance.get("/categories/" + categoryId + "?" + SECRETKEYURL).then((response) => {
        categoryIdRequest = response.data;
    }).catch((error) => {
        categoryIdRequest = '';
        next(error);
    });
    return categoryIdRequest;
}

async function getCategoriesByParentId(req, res, next) {
    let parentId;
    let categoryParentIdRequest;
    if (!req.params) {
        parentId = "mens";
    }
    else {
        parentId = req.params.id;
    }
    await axiosInstance.get("/categories/parent/" + parentId + "?" + SECRETKEYURL).then((response) => {
        categoryParentIdRequest = response.data;
    }).catch((error) => {
        categoryParentIdRequest = '';
        next(error);
    });
    return categoryParentIdRequest;
}

async function getAllCategories(req, res, next) {
    let categories;
    await axiosInstance.get("categories?" + SECRETKEYURL).then((response) => {
        categories = response.data;
    }).catch((error) => {
        categories ='';
        next(error);
    });
    return categories;

}

module.exports = {
    getCategoryById: getCategoryById,
    getCategoriesByParentId: getCategoriesByParentId,
    getAllCategories: getAllCategories
}
