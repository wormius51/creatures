const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');

//where our partials are located
hbs.registerPartials(path.join(__dirname, '../views/partials/'));

const publicPath = path.join(__dirname, '../public/');
const port = process.env.PORT || 8080;

//Start an Express application
var app = express();
var server = http.createServer(app);

app.set('view engine', 'hbs');
app.use(express.static(publicPath));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('home.hbs');
});

app.get('/login', (req, res) => {
    res.render('login.hbs');
});

app.get('/textbook', (req, res) => {
    res.render('textbook.hbs');
});

app.get('/mypages', (req, res) => {
    res.render('mypages.hbs');
});

app.get('/help', (req, res) => {
    res.render('help.hbs');
});

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
