const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    username: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    password: {
        type: String,
        required: true,
        max: 255,
        min: 6
    }
});

module.exports = mongoose.model('User', userSchema);