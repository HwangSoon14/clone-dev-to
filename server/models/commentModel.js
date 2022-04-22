const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Types.ObjectId,
			ref: 'Users',
		},
		postId: {
			type: mongoose.Types.ObjectId,
			ref: 'Posts',
			required: true,
		},
		content: { type: String, required: true },
		like: { type: Number, default: 0 },
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model('Comments', commentSchema);
