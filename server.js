var express     = require('express');
var app         = express();
var path        = require('path');
var mongoose    = require('mongoose');
var config      = require('./app/config');
var Pod         = require('./app/models/Pod');
var Machine     = require('./app/models/Machine');
var connectionString = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });


app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/api/pods', function(request, response) {
    Pod.find(request.query, function(err, pods) {
        if (err)
            responses.send(err);

        response.json(pods);
    });
});

app.get('/api/machines', function(request, response) {
    Machine.find(request.query, function(err, pods) {
        if (err)
            responses.send(err);

        response.json(pods);
    });
});

app.listen(config.app.port);
console.log('Listening on http://localhost:' + config.app.port);
