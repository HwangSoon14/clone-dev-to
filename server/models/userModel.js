const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
	{
		userName: {
			type: String,
			required: true,
			trim: true,
			unique: true
		},
		fullName: {
			type: String,
		},
		socialId: {
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
			default: '404 bio not found',
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
		postsSaved: [{ type: mongoose.Types.ObjectId, ref: 'Posts'}]
	},
	{
		timestamps: true,
		versionKey: false
	},
);

module.exports =  mongoose.model('Users', userSchema);
