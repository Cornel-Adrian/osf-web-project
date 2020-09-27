module.exports = function (app) {
  app.get('/', (req, res) => {
    res.render('index');
  });

  app.use('/', require('./MainRoutes'));
  app.use('/product', require('./ProductRoutes'));
  app.use('/categories', require('./CategoriesRoutes'));
  app.use('/auth', require('./AuthRoutes'));
  app.use('/cart', require('./CartRoutes'));
  app.use('/wishlist', require('./WishlistRoutes'));
  app.use('/orders', require('./OrdersRoutes'));

}
