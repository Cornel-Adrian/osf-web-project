module.exports = function(app) {

    app.get('/', (req, res) => {
        res.render('index')
    });

    app.use('/users', require('./UserRoutes'));
    app.use('/products', require('./ProductRoutes'));
    app.use('/categories', require('./ProductRoutes'));
    app.use('/auth',require('./AuthRoutes'));

    
    // fallthrough error handler
    app.use(function onError(err, req, res, next) {
      // The error id is attached to `res.sentry` to be returned
      // and optionally displayed to the user for support.
      res.statusCode = 500;
      res.end(err + '\n');
    });
  }
  