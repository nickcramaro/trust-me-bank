const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use('/', routes);

app.listen(8080);