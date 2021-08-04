const mongoose = require('mongoose');
const {Schema} = mongoose

//destructuring/connecting user Schema
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    psassword: String
});

//declaring user model
const User = mongoose.model("User", userSchema);
//exporting user model
module.exports = User;