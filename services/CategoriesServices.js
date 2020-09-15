const { axiosInstance, SECRETKEYURL } = require("../helpers/HttpRequests");

async function getCategoryById(req) {
    let categoryId = req.params.id;
    let categoryIdRequest;
    await axiosInstance.get("/categories/"+ categoryId + "?" + SECRETKEYURL).then((res) => {
        categoryIdRequest = res.data;
    }).catch((error) => { 
        console.log(error);
    });
    return categoryIdRequest;
}

async function getCategoriesByParentId(req) {
    let parentId = req.params.id;
    console.log(parentId);
    let categoryParentIdRequest;
    await axiosInstance.get("/categories/parent/" + parentId + "?" + SECRETKEYURL).then((res) => {
        categoryParentIdRequest = res.data;
    }).catch((error) => {
    });
    return categoryParentIdRequest;
}

async function getAllCategories(req) {
    let categories;
    await axiosInstance.get("categories?" + SECRETKEYURL).then((res) => {
        categories = res.data;
    }).catch((error) => {
    });
    return categories;

}

module.exports = {
    getCategoryById: getCategoryById,
    getCategoriesByParentId: getCategoriesByParentId,
    getAllCategories: getAllCategories
}