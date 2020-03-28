const router = require('express').Router();
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {loginValidation} = require('../validation');


// login
router.post('/login', async (req, res) => {
    // validation
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // checking for repeated emails
    //const user = await User.findOne({email: req.body.email});
    //if (!user) return res.status(400).send("Email or password is wrong");

    // check for repeated usernames
    const username = await User.findOne({username: req.body.username});
    if (!username) return res.status(400).send("Username or password is wrong");

    // check if password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).send('Invalid password');

    // token of the user
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header('authentication-token', token).send(token);

    //res.send('Login successful');
});

module.exports = router;