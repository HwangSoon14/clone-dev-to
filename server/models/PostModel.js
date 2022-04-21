const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
	{
		userId: { type: String,  },
		title: { type: String , default: "đây là tiêu đề"},
		content: { type: String , default: "đây là nội dung"},
		tags: { type: Array, default: ["nodejs", "reactjs"]},
<<<<<<< HEAD
		slug: {type: String, unique: true, required: true}
=======
		slug: {type: String, unique: true, require: true},
>>>>>>> 32c490a2e50be894e09e424f471c9642338122a4
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model('Posts', postSchema);
