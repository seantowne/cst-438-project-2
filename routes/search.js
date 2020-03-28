// search.js (server side)

var express = require('express');
var router = express.Router();
const axios = require('axios');

/*
request(url, function(error, response, dataStream){
		if (!error && response.statusCode == 200){
			var data = JSON.parse(dataStream);
			console.log(data);
			//res.render('results', {data: data});
		}
	});
*/


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

/* The handler for the /search route */
router.get('/', function(req, res){
    console.log('search GET');
    console.log(req.query.query);
	var query = req.query.query;
	query = query.replace(/ /g, '%20');
	
	// This function is a promise, promises are wierd, thats
	// why there is the .then() thing. Its the only way to get
	// the response data out of axios.
	get_omdb_data_from_search_term(query).then(function(data){
	    res.render("index.ejs", { data : data });
	});
});




module.exports = router;