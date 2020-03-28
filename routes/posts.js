const router = require('express').Router();
const verify = require('./tokenVerification');

router.get('/', verify, (req, res) => {
    res.json({
        posts: {
            title: "Sample post",
            description: "this is an example on how to make a post"
        }
    });
});

module.exports = router;