const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Types.ObjectId,
			ref: 'Users',
		},
		postId: String,
		content: { type: String, required: true },
		likes: { type: Number, default: 0 },
	},
	{
		timestamps: true,	
		versionKey: false
	},
);

module.exports = mongoose.model('Comments', commentSchema);
