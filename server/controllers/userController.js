const UserModel = require('../models/UserModel');
const PostModel = require('../models/PostModel');
const userCtrl = {
	getUserById: async (req, res, next) => {
		try {
			const { id } = req.params;
			const data = await UserModel.find({ _id: id }, { email: 0, password: 0 });
			res.status(200).json(data);
		} catch (error) {
			next(error);
		}
	},
	getPostsByUser: async (req, res, next) => {
		try {
			const { userId } = req.params;
			const data = await PostModel.find({ userId }, { updatedAt: 0, content: 0, __v: 0}).populate(
				{
					path: "userId",
					select: ["userName", "avatar"],

				}
			);
			res.status(200).json(data);
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
};
module.exports = userCtrl;
