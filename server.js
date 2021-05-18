var express     = require('express');
var app         = express();
var port        = process.env.PORT || 8080;
var mongoose    = require('mongoose');
var Pod         = require('./app/models/Pod');
var Machine     = require('./app/models/Machine');

mongoose.connect("mongodb://localhost:27017/nespresso", { useNewUrlParser: true, useUnifiedTopology: true });


app.get('/pods', function(request, response) {
    Pod.find(request.query, function(err, pods) {
        if (err)
            responses.send(err);

        response.json(pods);
    });
});

app.get('/machines', function(request, response) {
    Machine.find(request.query, function(err, pods) {
        if (err)
            responses.send(err);

        response.json(pods);
    });
});

app.listen(port);
console.log('Listening on port ' + port);
