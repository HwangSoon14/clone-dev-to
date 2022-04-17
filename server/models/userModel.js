const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String, 
        required: true,
        trim: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model("Users", userSchema);