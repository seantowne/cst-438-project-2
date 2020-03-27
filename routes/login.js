// login.js (server side)

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('login.ejs');
    console.log("login GET");
});


function validate_login(username, password){
    return (Math.floor(Math.random() * 2) == 0) ? true : false;
}
router.post('/attempt', function(req, res) {
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