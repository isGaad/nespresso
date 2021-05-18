var express     = require('express');
var app         = express();
var port        = process.env.PORT || 8080;
var mongoose    = require('mongoose');
var Pod         = require('./app/models/Pod');
var Machine     = require('./app/models/Machine');

mongoose.connect("mongodb://localhost:27017/nespresso", { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(port);
console.log('Listening on port ' + port);
