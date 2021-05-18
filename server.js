var express          = require('express');
var app              = express();
var path             = require('path');
var mongoose         = require('mongoose');
var config           = require('./app/config');
var Pod              = require('./app/models/Pod');
var Machine          = require('./app/models/Machine');
var connectionString = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });


app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/api/pods', function(request, response) {
    var query = Pod.find(request.query);

    query.exec(function(err, pods) {
        if (err)
            responses.send(err);

        pods = pods.map(pod => pod.sku);

        response.json(pods);
    });
});

app.get('/api/machines', function(request, response) {
    var query = Machine.find(request.query);

    query.exec(request.query, function(err, machines) {
        if (err)
            responses.send(err);

        machines = machines.map(machine => machine.sku);

        response.json(machines);
    });
});

app.listen(config.app.port);
console.log('Listening on http://localhost:' + config.app.port);
