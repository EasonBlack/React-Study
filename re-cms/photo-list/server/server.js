var express = require('express');
var config = require('../webpack.config.js');

var app = express();

app.listen(3001, function () {
    console.log('connect success!');
});

require('./config/express')(app,express);
require('./config/routes')(app);
require('./config/mongo');