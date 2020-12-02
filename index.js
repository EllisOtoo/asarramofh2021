var express = require('express');
var path = require('path'); // Used to simplify paths || Core Node Js Module || No need to install
var ejs = require('ejs');
var bodyParser = require('body-parser');
var app = express();
var router = require('./routes.js')
var nodemailer = require('nodemailer');




app.use('/', router);
// parse application/x-www-form-urlencoded

// Body Parser
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())

app.set('view-engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.listen(3000, function () { // listen method with callback
    console.log('Server Started on Port 3000')
});

// Set static resources
app.use(express.static(path.join(__dirname, 'public')))