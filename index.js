var express = require('express');
var app = express();


app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile('public/index.html');
});

var HOST = process.env.HOST || '127.0.0.1';
var PORT = process.env.PORT || '30000';
app.listen(PORT, HOST, function() {
  console.log('Serving website on ' + HOST + ':' + PORT);
});
