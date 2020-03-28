// createAccount.js (server side)

var express = require('express');
var router = express.Router();


function validate_new_user(fullname, username, password){
    return Math.floor(Math.random() * 2) == 0;
}

router.get('/', function(req, res){
    console.log('createAccount GET');
    res.render('createAccount.ejs');
});

router.post('/', function(req, res){
    console.log("createAccount POST");
    var fullname = req.body.fullname;
    var username = req.body.username;
    var password = req.body.password;
    var passconf = req.body.passconf;
    console.log(fullname);
    console.log(username);
    console.log(password);
    console.log(passconf);
    res.json(
        { success: validate_new_user(fullname, username, password) }  
    );
});

module.exports = router;