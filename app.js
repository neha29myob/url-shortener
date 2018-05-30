var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var shortRoute = {};
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/new', function (req, res) {

    console.log(req.body.url);
    var key = Math.floor(Math.random() * 1000);
    shortRoute[key] = req.body.url;
    var body = {
            original_url: req.body.url,
            short_url: `localhost:3000/${key}`
        };
    res.json(body);
});

app.get('/:slug', function (req, res) {

    console.log(req.params.slug);
    res.redirect(shortRoute[req.params.slug]);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
