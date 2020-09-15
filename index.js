const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;


require('./middlewares')(app,express);
require('./routes')(app);
require('dotenv').config()

app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});


module.exports = { app : app, express : express }