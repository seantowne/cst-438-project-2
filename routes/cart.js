// cart.js (server side)

var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/', function(req, res){
    console.log('cart GET');
    res.render('cart.ejs');
});

router.post('/', function(req, res){
   console.log('cart POST'); 
});

// might need this to populate shopping cart
function get_movie_from_imdbID(imdbID){
    var apiKey = "40129ad8";
    var url = "http://www.omdbapi.com/?apikey=" + apiKey + "&i=" + imdbID;
    
    console.log("Requesting Movie imdbID=" + imdbID);
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


router.post('/add', function(req, res){
   console.log('cart/add POST');
   
   var imdbID_to_be_added_to_cart = req.body.imdbID;
   
   console.log(imdbID_to_be_added_to_cart);
   
   res.redirect('back');
});

module.exports = router;