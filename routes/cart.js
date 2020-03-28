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

module.exports = router;