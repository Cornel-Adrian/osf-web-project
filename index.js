const express = require('express');
const app = express();
const Sentry = require("@sentry/node");
const PORT = process.env.PORT || 3000;
const SENTRYDSN = process.env.SENTRYDSN;

require('./routes')(app);
require('dotenv').config()

app.set('view engine', 'ejs');
app.use('/static', express.static('public'));

Sentry.init({
  dsn: SENTRYDSN,
  tracesSampleRate: 1.0,
});

app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});



module.exports = app;