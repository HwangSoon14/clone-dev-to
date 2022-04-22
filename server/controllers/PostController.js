const postModel = require('../models/PostModel');
const QueryMethod = require('../Utils/QueryMethod');

const postController = {
	getAllPost: async (req, res, next) => {
		try {
			const queryMethod = new QueryMethod(req.query, postModel.find({})).pagination().sort()
			const data = await queryMethod.method;
			res.status(200).json(data);
		} catch (error) {
			next(error);
		}
	},
	getPostById: async (req, res, next) => {
		try {
			const { id } = req.params;
			const data = await postModel.findOne({ _id: id }) || [];
			res.status(200).json(data);
		} catch (error) {
			next(error);
		}
	},
	addPost: async (req, res, next) => {
		try {
			const {likes, comments, slug, ...value} = req.body
			const data = await postModel.create({
				...value,
				userId: req.userId,
			});
			res.status(201).json(data);
		} catch (error) {
			next(error);
		}
	},
	likePost: async (req, res, next) => {
		try {
			const {postId} = req.params
			const data = await postModel.updateOne({_id: postId, userId: req.userId}, {$addToSet: {likes: req.userId}})
			res.status(201).json(data);
		} catch (error) {
			next(error);
		}
	},
	unlikePost: async (req, res, next) => {
		try {
			const {postId} = req.params
			const data = await postModel.updateOne({_id: postId, userId: req.userId}, {$pull: {likes: req.userId}})
			res.status(201).json(data);
		} catch (error) {
			next(error);
		}
	},
	editPost: async (req, res, next) => {
		try {
			const { id } = req.params;
			const { userId, ...value } = req.body;
			await postModel.findOneAndUpdate({ _id: id, userId: req.userId }, value);
			res.status(201).json({ mess: 'update post success!' });
		} catch (error) {
			next(error);
		}
	},
	deletePost: async (req, res, next) => {
		try {
			const { id } = req.params;
			await postModel.findOneAndDelete({ _id: id, userId: req.userId });
			res.status(200).json({ mess: 'delete post success!' });
		} catch (error) {
			next(error);
		}
	},
};

module.exports = postController;
