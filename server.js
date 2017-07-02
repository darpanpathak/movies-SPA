var express = require("express");
var path = require('path');

var app = express();

var PORT = process.env.PORT || 3030;

app.use(express.static(path.join(__dirname + '/dist')));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(PORT, function(err) {
    console.log('running server on port ' + PORT);
});