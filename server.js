const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const auth = require('./routes/auth.route');
const accounts = require('./routes/account.route');
const transactions = require('./routes/transaction.route');

mongoose.connect('mongodb://localhost:27017/trust-me');

app.use(express.static('public'));
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use(bodyParser.json());

//registering routes
auth(app);
accounts(app);
transactions(app);

//listening on port 8080
app.listen(8080);

module.exports = app;