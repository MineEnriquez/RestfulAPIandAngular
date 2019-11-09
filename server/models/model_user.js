const mongoose = require('mongoose');

// Task Schema and Task Model:
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3 },
    }, { timestamps: true });
const User = mongoose.model('users', UserSchema);

//Exports:
module.exports = {
    User: User,
};