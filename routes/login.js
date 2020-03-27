// login.js (server side)

var express = require('express');
var router = express.Router();

//router.use(express.static('../public'));


router.get('/', function(req, res) {
    console.log("login GET");
    res.render('login.ejs');
});


// here is where we can validate a user login, log them in if valid and return true
// or don't log them in if invalid and return false
function validate_login(username, password){
    return Math.floor(Math.random() * 2) == 0;
}



router.post('/', function(req, res) {
    console.log("login POST");
    var username = req.body.username;
    var password = req.body.password;
    
    console.log(username);
    console.log(password);
    res.json(
        { success:validate_login(username, password) }
    );
});



module.exports = router;