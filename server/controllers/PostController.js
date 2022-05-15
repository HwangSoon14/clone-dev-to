import { QueryMethod } from '../Utils/QueryMethod.js';
import postModel from '../models/PostModel.js';
import commentModel from '../models/commentModel.js';
import followModel from '../models/FollowModel.js';
import { ConvertDate } from '../Utils/ConvertDate.js';
const postController = {
	getLatest: async (req, res, next) => {
		try {
			const data = await postModel.find({
				createdAt: {
					$lte: new Date(),
					$gte: new Date(new Date().setDate(new Date().getDate() - 5)),
				},
			});
			res.json(data);
		} catch (error) {
			next(error);
		}
	},

	getRelevant: async (req, res, next) => {
		try {
			const result = await followModel.find({ userId: req.userId });
			const followerArr = [];
			const tagArr = [];
			result.map((val) => {
				followerArr.push(val.followerId), tagArr.push(val.tagId);
			});
			const data = await postModel.find({
				userId: { $in: followerArr },
				tags: { $in: ['javascript'] },
				createdAt: {
					$lte: new Date(),
					$gte: new Date(new Date().setDate(new Date().getDate() - 5)),
				},
			});
			res.json(data);
		} catch (error) {
			next(error);
		}
	},

	getTopPost: async (req, res, next) => {
		try {
			const { type } = req.params;
			const { StartAndEndPoint } = ConvertDate;
			const { start, end } = StartAndEndPoint(type);
			const data = await postModel
				.find({
					createdAt: {
						$lte: start,
						$gte: end,
					},
				})
				.lean();
			const scoreArr = data
				.map((val) => {
					const time = (new Date().getTime() - new Date(val.createdAt).getTime()) / 3600000;
					const g = 1.8;
					const score = (val.likes.length - 1) / Math.pow(time + 2, g);
					return {
						...val,
						score,
					};
				})
				.sort((a, b) => b.score - a.score);
			res.json(scoreArr);
		} catch (error) {
			next(error);
		}
	},

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

			const data =
				(await postModel.findOne({ slug }).populate({
					path: 'userId',
					select: ['userName', 'avatar'],
				})) || [];
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

export default postController;
