// server.js
// set up ===================

//var http = require('http');
// added for ssl
var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey = fs.readFileSync('cert/mykey.key');
var certificate = fs.readFileSync('cert/certificate.crt');
var credentials = { key: privateKey, cert: certificate};

var express = require('express');
var app = express();
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

var cookieParser = require('cookie-parser')
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport = require('passport');
var session = require('express-session');

// configuration =================
var env = process.env.NODE_ENV || 'local',
    config = require('./app/config/config')[env];

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

mongoose.connect('mongodb://' + config.app.database.host + ':' + config.app.database.port + '/' + config.app.database.name); // connect to mongoDB database on modulus.io
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
app.use('/lib',  express.static(__dirname + '/lib'));
app.set('views', __dirname + '/app/views');
app.set('view engine', 'ejs');
//app.use(cookieParser());

var favicon = require('serve-favicon');
app.use(favicon(__dirname + '/public/img/favicon.ico'));

app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({
    'extended': 'true'
})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
})); // parse application/vnd.api+json as json
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))


app.use(methodOverride());

var samlstrategy = require('./app/config/passport');

samlstrategy(passport, config)

app.use(passport.initialize());
app.use(passport.session());

require("./app/routes/routes.js")(app, passport)

// listen (start app with node server.js) ======================================
//app.listen(config.app.port);
//httpServer.listen(80);
//httpsServer.listen(443);

httpServer.listen(config.app.httpPort);
httpsServer.listen(config.app.httpsPort);

console.log("App listening on port " + config.app.httpPort);
console.log("App listening on secure port " + config.app.httpsPort);

// routes ======================================================================

    // api ---------------------------------------------------------------------
    // get all todos


