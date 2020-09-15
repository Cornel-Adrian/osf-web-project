const { SECRETKEYURL } = require("../helpers/HttpRequests");

async function productSearch(req) {
    let id = req.query.id;
    let page = req.query.page;
    let primaryCategoryId = req.primary_category_id;
    
    if (id) {
        let productIdRequest = await axios.get("id=" + id + "&" + SECRETKEYURL);
        return productIdRequest;
    }
    if (page) {
        let productPageRequest = await axios.get("page=" + page + "&" + SECRETKEYURL);
        return productPageRequest;
    }
    if (primaryCategoryId) {
        let productCategoryRequest = await axios.get("primary_category_id=" + primaryCategoryId + "&" + SECRETKEYURL);
        return productCategoryRequest;
    }
    return;
}

module.exports = {
    productSearch: productSearch
}
