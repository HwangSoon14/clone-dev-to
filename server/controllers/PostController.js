import { QueryMethod } from '../Utils/QueryMethod.js';
import postModel from '../models/PostModel.js';
import commentModel from '../models/commentModel.js';
import followModel from '../models/FollowModel.js';
import { ConvertDate, RecentTimes } from '../Utils/ConvertDate.js';
const postController = {
	getLatest: async (req, res, next) => {
		try {
			const data = await postModel
				.find({
					createdAt: RecentTimes,
				})
				.populate('userId', 'userName avatar');
			res.json(data);
		} catch (error) {
			next(error);
		}
	},

	getRelevant: async (req, res, next) => {
		try {
			const followerArr = [];
			const tagArr = [];
			if (req.userId) {
				const result = await followModel.find({ userId: req.userId }).lean();

				result.map((val) => {
					followerArr.push(val.followerId), tagArr.push(val.tagId);
				});
			}
			if (followerArr.length === 0) {
				const data = await postModel
					.find({
						createdAt: RecentTimes,
					})
					.populate('userId', 'userName avatar');
				return res.json(data);
			} else {
				const data = await postModel
					.find({
						$or: [{ userId: { $in: followerArr } }, { tags: { $in: tagArr } }],
						createdAt: {
							$lte: new Date(),
							$gte: new Date(new Date().setDate(new Date().getDate() - 5)),
						},
					})
					.populate('userId', 'userName avatar');
				res.json(data);
			}
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
				.populate('userId', 'userName avatar')
				.lean();

			const scoreArr = data.map((val) => {
				const time = Math.abs(new Date() - new Date(val.createdAt)) / 3600000;
				const score = (val.likes.length - 1) / Math.pow(time + 2, 1.8);
				return {
					...val,
					score,
				};
			});

			const negativeNumber = scoreArr.filter((val) => val.score < 0).sort((a, b) => a.score - b.score);
			const positiveNumber = scoreArr.filter((val) => val.score > 0).sort((a, b) => b.score - a.score);

			res.json([...positiveNumber, ...negativeNumber]);
		} catch (error) {
			next(error);
		}
	},

	getPostBySlug: async (req, res, next) => {
		try {
			const { slug } = req.params;

			const result = await postModel
				.findOne({ slug })
				.populate('userId', 'userName avatar description createdAt')
				.lean();
			const readNext = await postModel
				.find({ tags: { $in: result.tags }, createdAt: RecentTimes }, { title: 1, createdAt: 1, slug: 1 })
				.populate('userId', 'userName avatar')
				.limit(4);
			const otherPost = await postModel.find({
				createdAt: RecentTimes,
			}, {title: 1, slug: 1, tags: 1}).limit(3)
			res.status(200).json({ ...result, readNext: readNext, otherPost});
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
				.populate('userId', ['userName', 'avatar'])
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
			const data = await postModel.updateOne({ _id: id }, { $addToSet: { likes: req.userId } });
			res.status(201).json({ mess: 'like' });
		} catch (error) {
			next(error);
		}
	},

	unlikePost: async (req, res, next) => {
		try {
			const { id } = req.params;
			const data = await postModel.updateOne({ _id: id }, { $pull: { likes: req.userId } });
			res.status(201).json({ mess: 'unlike' });
		} catch (error) {
			next(error);
		}
	},

	addComment: async (req, res, next) => {
		try {
			const { id } = req.params;
			const { content } = req.body;
			const data = await commentModel.create({
				userId: req.userId,
				postId: id,
				content,
				replyToId: req.body?.replyToId,
			});
			await postModel.updateOne({ _id: id }, { $addToSet: { comments: data._id } });
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
