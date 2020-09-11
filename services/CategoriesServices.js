const { axios, BASEURL } = require("../helpers/httpRequests");

async function getCategoryById(categoryId, secretKey) {
    if (!categoryId || !secretKey) {
        throw new error("Category or Secret Key is null");
    }
    try {
        let categoryIdRequest = await axios.get(BASEURL + categoryId + "?secretKey=" + secretKey);
        return categoryIdRequest;
    } catch (err) {
        throw new err;
    }
}

async function getCategoriesByParentId(parentID, secretKey) {
    if (parentID == null || secretKey == null) {
        throw new error("Category or Secret Key is null");
    }
    try {
        let categoryIdRequest = await axios.get(BASEURL + parentID + "?secretKey=" + secretKey);
        return categoryIdRequest;
    } catch (err) {
        throw new err;
    }
}

async function getAllCategories(secretKey) {
    if (secretKey == null) {
        throw new error("Secret Key is null");
    }
    return "getAllCategories";
}

module.exports = {
    getCategoryById: getCategoryById,
    getCategoriesByParentId: getCategoriesByParentId,
    getAllCategories: getAllCategories
}
