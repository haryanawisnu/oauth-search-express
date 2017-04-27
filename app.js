var express = require('express');
var app = express();
var controllers = require('./controllers/twattControllers');

app.use('/', controllers.getJson);

app.listen(3000)
