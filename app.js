var express = require("express");
var bodyParser = require("body-parser");
var app = express();
const axios = require('axios');

// set the template engine to ejs
app.set('view engine', 'ejs');

// Tells node to look in public/ for styles
app.use(express.static(__dirname + "/public"));
console.log(__dirname);

// makes data that comes to the server from the client a json object
app.use(bodyParser.urlencoded({extended: true}));

// gets data based on search term from omdb
// its the same function as the one in search.js
// importing is a pain in the ass in node
function get_omdb_data_from_search_term(searchTerm){
    var apiKey = "40129ad8";
    var url = "http://www.omdbapi.com/?apikey=" + apiKey + "&s=" + searchTerm;
    
    console.log("Requesting OMDB s=" + searchTerm);
    console.log("url: " + url);
    
    return axios.get(url)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log("Error Fetching Data from OMDB");
            return error;
        })
        .finally(function () {
            // always executed
    });
}

// route to base domain
app.get("/", function(req, res){
    get_omdb_data_from_search_term("otter").then(function(data){
        res.render("index.ejs", { data : data } );
    });
});

// route to base domain
app.get("/home", function(req, res){
    get_omdb_data_from_search_term("otter").then(function(data){
        res.render("index.ejs", { data : data } );
    });
});


// Tells node to look in ./routes/login for /login/* etc..
app.use('/login', require('./routes/login'));
app.use('/createAccount', require('./routes/createAccount'));
app.use('/search', require('./routes/search'));


// anything that hasn't matched a defined route is caught here
app.get("/*", function(req, res){
    res.render("error.ejs");
});

// listens for http requests
// port 3000 is for C9, port 8080 is for Heroku
app.listen(process.env.PORT || 3000 || 8080, function(){
    console.log("Server is running");
});