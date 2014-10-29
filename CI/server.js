/**
 * Created by Administrator on 10/25/2014.
 */
var serverLogger = require('./serverLogger');
var express = require('express');

var app = express();
app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res){
    serverLogger.info('Received request for: %s', req.url);
    res.render('index');
});

app.listen(process.env.PORT || 3000, process.env.IP || 'localhost');
serverLogger.info('Server started, waiting for requests..');