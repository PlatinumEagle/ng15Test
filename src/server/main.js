var express = require('express');
var app = express();
var port = '8080';
app.listen(port);

// prepare server
//app.use('/api', api); // redirect API calls
//app.use('/', express.static(__dirname + '/www')); // redirect root
//app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
//app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
//app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

app.use('/', express.static(__dirname + '/../client')); // redirect root

console.log('web server listening on port ' + port.toString() + '...');
