const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const dotenv = require('dotenv'); // safe hadlying of db access
const mongoose = require("mongoose"); // used for mongodb

// Import routes here:
const authenticateRoute = require('./routes/authenticate');
const postRoute = require('./routes/posts');

// route to base domain
app.get("/home", function(req, res){
    res.render("home.ejs");
});

// helps hide information that should remain private
dotenv.config();
// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true }, () => 
    console.log('Connected to db...')
);

// set the template engine to ejs
app.set('view engine', 'ejs');

// Tells node to look in public/ for styles
app.use(express.static(__dirname + "/public"));
console.log(__dirname);
/*

// =========== This section may be redundant... will look into it =========== //
// route to base domain
app.get("/", function(req, res){
    res.render("home.ejs");
});// =========== This section may be redundant... will look into it =========== //

app.get('/jose', function(req, res){
    res.render("index.ejs");
}); 


// Tells node to look in ./routes/login for /login/*
app.use('/login', require('./routes/login'));
app.use('/createAccount', require('./routes/createAccount'));


// anything that hasn't matched a defined route is caught here
app.get("/*", function(req, res){
    res.render("error.ejs");
});*/

// Middleware
// accept json
app.use(bodyParser.json());
// accept url encoded
app.use(bodyParser.urlencoded({extended: true}));

// Route Middleware here:
app.use('/api/user', authenticateRoute);
app.use('/api/posts', postRoute);

// listens for http requests
// port 3000 is for C9, port 8080 is for Heroku
app.listen(process.env.PORT || 3000 || 8080, function(){
    console.log("Server is running");
});