const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username must be provided.'],
        minlength: 3,
        maxlength: 20,
        unique: true
    },
    email: {
        type: String,
        required: true,
        maxlength: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    profilePicture: {
        type: String,
        default: ""
    }
},
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);