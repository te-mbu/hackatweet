const mongoose = require('mongoose');

const TweetsSchema = mongoose.Schema({
    firstname: String,
    username: String,
    message: String,
});

const Tweet = mongoose.model("tweets", TweetsSchema)
module.exports = Tweet