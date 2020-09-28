const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();


const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'production') { require('dotenv').config() }
require('./middlewares')(app, express, cookieParser);
require('./routes')(app);


app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});


module.exports = app, express;