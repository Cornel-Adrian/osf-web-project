module.exports = function (app) {
  app.get('/', (req, res) => {
    console.log(req.cookies);
    res.render('index');
  });

  app.use('/products', require('./ProductRoutes'));
  app.use('/categories', require('./CategoriesRoutes'));
  app.use('/auth', require('./AuthRoutes'));
  app.use('/cart', require('./CartRoutes'));
  app.use('/wishlist', require('./WishlistRoutes'));
  app.use('/orders', require('./OrdersRoutes'));

}
