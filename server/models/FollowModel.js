import mongoose from 'mongoose';

const followSchema = new mongoose.Schema(
	{
		userId: {type: mongoose.Types.ObjectId, ref: "Users"},
		followerId: {type: mongoose.Types.ObjectId, ref: "Users"},
		tagId: {type: mongoose.Types.ObjectId, ref: "Tags"},
	},
	{
		timestamps: true,
		versionKey: false,
	},
);
const Posts = mongoose.model('Follows', followSchema);
export default Posts;
