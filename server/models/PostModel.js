import mongoose from 'mongoose';
import slug from 'mongoose-slug-generator';
const options = {
	separator: '-',
	lang: 'en',
	truncate: 100,
};
mongoose.plugin(slug, options);

const postSchema = new mongoose.Schema(
	{
		userId: { type: mongoose.Types.ObjectId, ref: 'Users' },
		title: { type: String, required: true },
		content: { type: String, default: 'đây là nội dung' },
		tags: { type: Array, default: ['nodejs', 'reactjs'] },
		slug: { type: String, slug: 'title', slug_padding_size: 3, unique: true },
		likes: [{ type: mongoose.Types.ObjectId, default: [] }],
		comments: [{ type: mongoose.Types.ObjectId, default: [] }],
		saver: [{ type: mongoose.Types.ObjectId, default: [] }],
	},
	{
		timestamps: true,
		versionKey: false,
	},
);
const Posts = mongoose.model('Posts', postSchema);
export default Posts;
