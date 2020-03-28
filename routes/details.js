// search.js (server side)

var express = require('express');
var router = express.Router();
const axios = require('axios');

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


router.get('/', function(req, res){
    console.log('details GET');
    imdbID = req.query.imdbID;
    get_movie_from_imdbID(imdbID).then(function(data){
        res.render( 'productDetail.ejs', { movie : data } );
    });
});




module.exports = router;