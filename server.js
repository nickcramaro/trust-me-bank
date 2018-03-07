const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const auth = require('./routes/auth');

mongoose.connect('mongodb://localhost:27017/trust-me');

app.use(express.static('public'));
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use(bodyParser.json());

app.use('/auth', auth);

app.listen(8080);