var express = require("express");
var bodyParser = require("body-parser");
var app = express();

// set the template engine to ejs
app.set('view engine', 'ejs');

// Tells node to look in css/ for styles
app.use(express.static("css"));

// makes data that comes to the server from the client a json object
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.render("home.ejs");
});


app.get("/*", function(req, res){
    res.render("error.ejs");
});

app.listen(process.env.PORT || 3000 || 8080, function(){
    console.log("Server is running");
});
