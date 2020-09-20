module.exports = function (app) {
  app.get('/', (req, res) => {
    console.log(req.cookies);
    res.render('index', { user: req.cookies.user });
  });

  app.use('/products', require('./ProductRoutes'));
  app.use('/categories', require('./CategoriesRoutes'));
  app.use('/auth', require('./AuthRoutes'));
  app.use('/cart', require('./CartRoutes'));
  app.use('/wishlist', require('./WishlistRoutes'));
  app.use('/orders', require('./OrdersRoutes'));


  // fallthrough error handler
  app.use(function onError(error, req, res, next) {
    // The error id is attached to `res.sentry` to be returned
    // and optionally displayed to the user for support.
    res.statusCode = 500;
    console.log(error)
    res.locals.error = error;
    res.render('error', error);
    res.end(res.sentry + '\n');
  });
}
