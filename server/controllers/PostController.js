const postModel = require('../models/PostModel');

const postController = {
	getPost: async (req, res, next) => {
		try {
			const data = await postModel.find({ userId: req.userId });
			res.status(200).json(data);
		} catch (error) {
			next(error);
		}
	},
	addPost: async (req, res, next) => {
		try {
			const data = await postModel.create({
				...req.body,
				userId: req.userId,
			});
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
