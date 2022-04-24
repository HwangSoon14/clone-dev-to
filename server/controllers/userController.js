const UserModel = require('../models/UserModel');
const PostModel = require('../models/PostModel');
const userCtrl = {
	getUserInfo: async (req, res, next) => {
		try {
			const { userName } = req.params;
			const data = await UserModel.find({ userName }, { email: 0, password: 0 });
			res.status(200).json(data);
		} catch (error) {
			next(error);
		}
	},
	getUserPosts: async (req, res, next) => {
		try {
			const { userId } = req.params;
			const data = await PostModel.find({ userId }, { content: 0 }).populate({
				path: 'userId',
				select: ['userName', 'avatar'],
			});
			res.status(200).json(data);
		} catch (error) {
			next(error);
		}
	},
	addPost: async (req, res, next) => {
		try {
			const { title, content, tags } = req.body;

			const data = await PostModel.create({ title, content, tags, userId: req.userId });
			res.status(201).json(data);
		} catch (error) {
			next(error);
		}
	},
	editPost: async (req, res, next) => {
		try {
			const { id } = req.params;
			const { title, content, tags } = req.body;
			await PostModel.updateOne({ userId: req.userId, _id: id }, { title, content, tags });
			res.status(201).json({ mess: 'sửa post' });
		} catch (error) {
			next(error);
		}
	},
	deletePost: async (req, res, next) => {
		try {
			const { id } = req.params;
			await PostModel.deleteOne({ userId: req.userId, _id: id });
			res.status(201).json({ mess: 'xóa post' });
		} catch (error) {
			next(error);
		}
	},
	editUser: async (req, res, next) => {
		try {
			const { id, email, password, ...value } = req.body;
			await UserModel.findOneAndUpdate({ _id: req.userId }, value);
			res.status(201).json({ mess: 'update user success!' });
		} catch (error) {
			next(error);
		}
	},
	savePost: async (req, res, next) => {
		try {
			const { id } = req.params;
			await UserModel.updateOne({ _id: req.userId }, { $addToSet: { postsSaved: id } });
			await PostModel.updateOne({ _id: id }, { $addToSet: { saver: req.userId } });
			res.status(201).json({ mess: 'save post!' });
		} catch (error) {
			next(error);
		}
	},
	unsavePost: async (req, res, next) => {
		try {
			const { id } = req.params;

			await UserModel.updateOne({ _id: req.userId }, { $pull: { postsSaved: id } });
			await PostModel.updateOne({ _id: id }, { $pull: { saver: req.userId } });
			res.status(201).json({ mess: 'save post!' });
		} catch (error) {
			next(error);
		}
	},
	savedPost: async (req, res, next) => {
		try {
			const data = await UserModel.find({_id: req.userId}, {postsSaved: 1}).populate({
				path: "postsSaved",
				select: "title, updatedAt, tags",
				populate: {
					path: "userId",
					select: "fullName, avatar"
				}
			})
			res.status(201).json(data[0].postsSaved);
		} catch (error) {
			next(error);
		}
	},
};
module.exports = userCtrl;
