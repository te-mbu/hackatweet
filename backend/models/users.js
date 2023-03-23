const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    firstname: String,
    username: String,
    password: String,
    token: String,
});

const User = mongoose.model("users", UsersSchema)
module.exports = User