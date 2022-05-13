import mongoose from 'mongoose';

const tagSchema = new mongoose.Schema(
	{
		title: {type: String},
        color: {type: String},
        thumbnail: {type: String},
        description: {type: String}
	},
	{
		timestamps: true,
		versionKey: false,
	},
);
const Posts = mongoose.model('Tags', tagSchema);
export default Posts;
