var express = require('express');
var swig = require('swig');
var app = express();

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.static('static'));

app.use(function (req, res, next) {
    var d = new Date();
    console.log('[%s][/%s] Request from %s', d.toLocaleTimeString(), req.baseUrl, req.ip);
    next();
});

app.get('/', function (req, res) {
    res.render('main', {}, function (err, html) {
        res.send(html);
    });
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    var d = new Date();
    console.log('[%s] Listening on http://%s:%s', d.toLocaleTimeString(), host, port);
});
