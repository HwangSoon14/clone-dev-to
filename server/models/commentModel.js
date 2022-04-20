const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "Users",
        required: true
    },
    postId: {
        type: mongoose.Types.ObjectId,
        ref: "Posts",
        required: true
    },
    content: {type: String, required: true},
    likes: [{
        type: mongoose.Types.ObjectId,
        ref: "Users",
        required: true
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model("Comments", commentSchema)