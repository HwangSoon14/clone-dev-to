import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema(
	{
		type: {type: String},
        content: {type: String},
        userId: {type: mongoose.Types.ObjectId, ref: "Users"},
        isWatched: {type: Boolean}
	},
	{
		timestamps: true,
		versionKey: false,
	},
);
const Posts = mongoose.model('Notifications', notificationSchema);
export default Posts;
