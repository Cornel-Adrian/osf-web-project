const { SECRETKEYURL } = require("../helpers/HttpRequests");

async function productSearch(req, res) {
    let id = req.query.id;
    let page = req.query.page;
    let primaryCategoryId = req.query.primary_category_id;
    console.log("Product Service");
    console.log(id + "  " + page + "  " + primaryCategoryId);

    if (id) {
        let product;
        await axios.get("/products/product_search?id=" + id + "&" + SECRETKEYURL).then((res) => {
            product = res.data;
        }).catch((error) => { });
        return res.render('product', { product: product });
    }
    if (page) {
        let productPage;
        await axios.get("/products/product_search?page=" + page + "&" + SECRETKEYURL).then((res) => {
            productPage = res.data;
        }).catch((erorr) => { });
        return productPage;
    }
    if (primaryCategoryId) {
        let productCategory;
        await axios.get("/products/product_search?primary_category_id=" + primaryCategoryId + "&" + SECRETKEYURL).then((res) => {
            productCategory = res.data;
        }).catch((error) => { });
        return productCategory;
    }
}

module.exports = {
    productSearch: productSearch
}