const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
	{
		userId: { type: String,  },
		title: { type: String , default: "đây là tiêu đề"},
		content: { type: String , default: "đây là nội dung"},
		tags: { type: Array, default: ["nodejs", "reactjs"]},
		slug: {type: String, unique: true, require: true},
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model('Posts', postSchema);
