const { axiosInstance, SECRETKEY, SECRETKEYURL, getHeader } = require("../helpers/HttpRequests");

async function productSearch(req, res, next) {
    if (!req.query) { return next(); }
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
        });
        return productCategory;
    }
}

async function getProductById(req, res, next) {
    if (!req.params) { return next(); }
    let id = req.params.id;
    if (id) {
        let product;
        await axiosInstance.get("/products/product_search?id=" + id + "&" + SECRETKEYURL).then((response) => {
            // Get the sole element from array
            product = response.data[0];
        }).catch((error) => {
            product = [];
        });
        return product;
    }
}

async function getProductByParentId(req, res, next) {
    if (!req.params) { return next(); }
    let id = req.params.id;
    if (id) {
        let products;
        await axiosInstance.get("/products/product_search?primary_category_id=" + id + "&" + SECRETKEYURL).then((response) => {
            products = response.data;
        }).catch((error) => {
            next(error);
        });
        return products;
    }
}


async function addItem(req, res, next) {
    if (!req.body) { return next(); }
    let header = getHeader(req.cookies.token);
    if (req.body.vote) {

        if (req.body.vote == "buy") {
            await axiosInstance.post('/cart/addItem', {
                secretKey: SECRETKEY,
                productId: req.body.productId,
                variantId: req.body.variantId,
                quantity: req.body.quantity
            }, {
                headers: header
            }).then((response) => {
            }).catch((error) => {
                next(error);
            })
        }

        if (req.body.vote == "wishlist") {
            await axiosInstance.post("/wishlist/addItem", {
                secretKey: SECRETKEY,
                productId: req.body.productId,
                variantId: req.body.variantId,
                quantity: req.body.quantity
            },
                {
                    headers: header
                }
            ).then((response) => {
            }).catch((error) => {
                next(error);
            });
        }
        next();
    }
}

module.exports = {
    productSearch: productSearch,
    getProductById: getProductById,
    getProductByParentId: getProductByParentId,
    addItem: addItem
}
