const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
	{
		userName: {
			type: String,
			required: true,
			trim: true,
		},
		fullName: {
			type: String,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			default: 'không có mô tả',
		},
		avatar: {
			type: String,
			default: 'https://res.cloudinary.com/tuy-n-beat/image/upload/v1650356999/default/store-default_izscy4.png',
		},
		birthDay: {
			type: Date,
		},
		skills: {
			type: Array,
		},

		work: {
			type: String,
		},

		location: {
			type: String,
		},
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model('Users', userSchema);