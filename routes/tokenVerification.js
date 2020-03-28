const jwt = require('jsonwebtoken');

// this function can be given to any route to force the use of token/login
module.exports = function (req, res, next) {
    const token = req.header('authentication-token');
    if(!token) return res.status(401).send('Access Denied');

    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
    } catch (err) {
        res.status(400).send('Invalid Token');
    }
}