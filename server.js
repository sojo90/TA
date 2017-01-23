var express = require('express')
var path = require('path')

var app = express();

app.use(express.static(__dirname + '/'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3001, () => console.log('Running on localhost:3001'));