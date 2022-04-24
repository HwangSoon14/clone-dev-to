const QueryMethod = require('../Utils/QueryMethod');
const postModel = require('../models/PostModel');
const commentModel = require('../models/commentModel');

const postController = {

	getAllPost: async (req, res, next) => {
		try {
			const queryMethod = new QueryMethod(req.query, postModel.find({}, {}))
				.populate('userId', 'fullName, avatar')
				.pagination()
				.sort();
			const data = await queryMethod.method;
			res.status(200).json(data);
		} catch (error) {
			next(error);
		}
	},

	getPostBySlug: async (req, res, next) => {
		try {
			const { slug } = req.params;

			const data = (await postModel.findOne({ slug })) || [];
			res.status(200).json(data);
		} catch (error) {
			next(error);
		}
	},

	getTags: async (req, res, next) => {
		try {
			const data = (await postModel.find({}, { tags: 1, _id: 0 })) || [];
			const newData = data.reduce((pre, val) => {
				const obj = { ...pre };
				val['tags'].map((item) => {
					obj[item] = (obj[item] || 0) + 1;
				});
				return obj;
			}, {});
			res.status(200).json(newData);
		} catch (error) {
			next(error);
		}
	},

	getCommentsByPostId: async (req, res, next) => {
		try {
			const { id } = req.params;
			const queryMethod = new QueryMethod(req.query, commentModel.find({ postId: id }))
				.populate('userId', 'fullName, avatar')
				.pagination()
				.sort();
			const data = (await queryMethod.method) || [];
			res.status(200).json(data);
		} catch (error) {
			next(error);
		}
	},

	likePost: async (req, res, next) => {
		try {
			const { id } = req.params;
			const data = await postModel.updateOne({ _id: id, userId: req.userId }, { $addToSet: { likes: req.userId } });
			res.status(201).json({ mess: 'like' });
		} catch (error) {
			next(error);
		}
	},

	unlikePost: async (req, res, next) => {
		try {
			const { id } = req.params;
			const data = await postModel.updateOne({ _id: id, userId: req.userId }, { $pull: { likes: req.userId } });
			res.status(201).json({ mess: 'unlike' });
		} catch (error) {
			next(error);
		}
	},

	addComment: async (req, res, next) => {
		try {
			const { id } = req.params;
			const { content } = req.body;
			const data = await commentModel.create({ userId: req.userId, postId: id, content });
			await postModel.updateOne({ _id: id, userId: req.userId }, { $push: { comments: data._id } });
			res.status(201).json({ mess: 'add new comment successfully' });
		} catch (error) {
			next(error);
		}
	},

	editComment: async (req, res, next) => {
		try {
			const { id } = req.params;
			const { content } = req.body;
			const data = await commentModel.updateOne({ userId: req.userId, _id: id }, { content });
			res.status(201).json(data);
		} catch (error) {
			next(error);
		}
	},
	
	deleteComment: async (req, res, next) => {
		try {
			const { id, idc } = req.params;
			await commentModel.deleteOne({ userId: req.userId, _id: idc });
			await postModel.updateOne({ _id: id, userId: req.userId }, { $pull: { comments: idc } });
			res.status(201).json('delete comment');
		} catch (error) {
			next(error);
		}
	},
};

module.exports = postController;
