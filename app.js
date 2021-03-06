const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const musicRoutes = require('./routes/music');
app.use('/music', musicRoutes);
app.use((req, res, next) => {
    res.status(404).send('Not found');
});
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000);