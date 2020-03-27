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
    
    axios.get(url)
        .then(function (response) {
            // handle success
            //console.log(response);
            return true;
        })
        .catch(function (error) {
            // handle error
            //console.log(error);
            return false;
        })
        .finally(function () {
            // always executed
    });
}

/* The handler for the /results route */
router.get('/', function(req, res){
    console.log('search GET');
    console.log(req.query.query);
	var query = req.query.query;
	var success = get_omdb_data_from_search_term(query);
	res.json({
	    "success" : success
	});
});




module.exports = router;