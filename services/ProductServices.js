const { axiosInstance, SECRETKEYURL } = require("../helpers/HttpRequests");

async function productSearch(req, res, next) {
    let id = req.query.id;
    let page = req.query.page;
    let primaryCategoryId = req.query.primary_category_id;

    if (id) {
        let product;
        await axiosInstance.get("/products/product_search?id=" + id + "&" + SECRETKEYURL).then((response) => {
            product = response.data;
        }).catch((error) => {
            next(error);
        });
        return product;
    }
    if (page) {
        let productPage;
        await axiosInstance.get("/products/product_search?page=" + page + "&" + SECRETKEYURL).then((response) => {
            productPage = response.data;
        }).catch((error) => {
            next(error);
        });
        return productPage;
    }
    if (primaryCategoryId) {
        let productCategory;
        await axiosInstance.get("/products/product_search?primary_category_id=" + primaryCategoryId + "&" + SECRETKEYURL).then((response) => {
            productCategory = response.data;
        }).catch((error) => {
            next(error);
            res.render('error', { error: error.response.data.error });
        });
        return productCategory;
    }
}

async function getProductById(req, res, next) {
    let id = req.params.id;
    if (id) {
        let product;
        await axiosInstance.get("/products/product_search?id=" + id + "&" + SECRETKEYURL).then((response) => {
            // Get the sole element from array
            product = response.data[0];
        }).catch((error) => {
            next(error);
            res.render('error', { error: error.response.data.error });
        });
        return product;
    }
}

module.exports = {
    productSearch: productSearch,
    getProductById: getProductById
}
