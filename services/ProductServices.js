async function productSearch(secretKey, page, id, primaryCategoryId) {
    if (!secretKey) {
        return;
    }
    if (id) {
        let productIdRequest = await axios.get(BASEURL + "id=" + id + "&secretKey=" + secretKey);
        return productIdRequest;
    }
    if (page) {
        let productPageRequest = await axios.get(BASEURL + "page=" + page + "&secretKey=" + secretKey);
        return productPageRequest;
    }
    if (primaryCategoryId) {
        let productCategoryRequest = await axios.get(BASEURL + "primary_category_id=" + primaryCategoryId + "&secretKey=" + secretKey);
        return productCategoryRequest;
    }
    return;
}

module.exports = {
    productSearch: productSearch
}
