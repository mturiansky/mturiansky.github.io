var express = require('express');
var swig = require('swig');
var app = express();

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.static('static'));

app.use(function (req, res, next) {
    var d = new Date();
    var u = req.originalUrl;
    if (u.length > 15) {
        u = u.substr(u.length - 15);
    } else {
        while (u.length < 15) {
            u += ' ';
        }
    }
    console.log('[%s][%s] Request from %s', d.toLocaleTimeString(), u, req.ip);
    next();
});

app.get('/', function (req, res) {
    res.render('main', { custommailjs:false }, function (err, html) {
        res.send(html);
    });
});

app.get('/send_mail', function (req, res) {
    res.render('send_mail', { custommailjs:true }, function (err, html) {
        res.send(html);
    });
});

app.post('/send_mail', function (req, res) {

});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    var d = new Date();
    console.log('[%s] Listening on http://%s:%s', d.toLocaleTimeString(), host, port);
});
