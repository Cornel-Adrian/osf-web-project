const { axiosInstance, SECRETKEYURL } = require("../helpers/HttpRequests");

async function productSearch(req, res) {
    let id = req.query.id;
    let page = req.query.page;
    let primaryCategoryId = req.query.primary_category_id;

    if (id) {
        let product;
        await axiosInstance.get("/products/product_search?id=" + id + "&" + SECRETKEYURL).then((res) => {
            product = res.data;
        }).catch((error) => {
            res.render('error', { error: error });
        });
        return product;
    }
    if (page) {
        let productPage;
        await axiosInstance.get("/products/product_search?page=" + page + "&" + SECRETKEYURL).then((res) => {
            productPage = res.data;
        }).catch((error) => {
            res.render('error', { error: error });
        });
        return productPage;
    }
    if (primaryCategoryId) {
        let productCategory;
        await axiosInstance.get("/products/product_search?primary_category_id=" + primaryCategoryId + "&" + SECRETKEYURL).then((res) => {
            productCategory = res.data;
        }).catch((error) => {
            res.render('error', {error: error});
         });
        return productCategory;
    }
}

module.exports = {
    productSearch: productSearch
}
