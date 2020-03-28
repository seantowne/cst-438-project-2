const router = require('express').Router();
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {registrationValidation, loginValidation} = require('../validation');

router.post('/createAccount', async (req, res) => {
    // before user is sent, validate the data
    const { error } = registrationValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // check for repeated emails
    //const emailExists = await User.findOne({email: req.body.email});
    //if (emailExists) return res.status(400).send("Email already exists");

    // check for repeated username
    const username = await User.findOne({username: req.body.username});
    if (username) return res.status(400).send("Username already exists");

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // add a new user
    const user = new User({
        fullname: req.body.fullname,
        username: req.body.username,
        //email: req.body.email,
        password: hashedPassword
    });
    try{
        let savedUser = await user.save();
        res.send({user: user._id});
    } catch(err){
        res.status(400).send(err);
    }
});

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