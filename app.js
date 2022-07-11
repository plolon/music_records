const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const musicRoutes = require('./routes/music');
app.use('/music', musicRoutes);

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000);