// login.js (server side)

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    console.log("login GET");
    res.render('login.ejs');
});


// here is where we can validate a user login, log them in if valid and return true
// or don't log them in if invalid and return false
function validate_login(username, password){
    return Math.floor(Math.random() * 2) == 0;
}

router.post('/attempt', function(req, res) {
    console.log("login/attempt POST");
    var username = req.body.username;
    var password = req.body.password;
    
    console.log(username);
    console.log(password);
    res.json(
        { success:validate_login(username, password) }
    );
});


function validate_new_user(username, password){
    return Math.floor(Math.random() * 2) == 0;
}

router.get('/create', function(req, res){
    console.log('login/create GET');
    res.render('createAccount.ejs');
});

router.post('/create/attempt', function(req, res){
    console.log("login/create/attempt POST");
    var fullname = req.body.fullname;
    var username = req.body.username;
    var password = req.body.password;
    var passconf = req.body.passwordConfirm;
    console.log(username);
    console.log(password);
    console.log(fullname);
    console.log(passconf);
    res.json(
        { success: validate_new_user(username, password) }  
    );
});

module.exports = router;