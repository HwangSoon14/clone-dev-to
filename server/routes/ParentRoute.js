const Router = require('express').Router();
const authRoute = require('./authRoute');
const uploadRoute = require('./UploadRoute');
const postRoute = require('./PostRoute');
const userRoute = require('./UserRoute');
const commentRoute = require('./CommentRoute');

module.exports = function (app) {
	Router.use('/auth', authRoute);
	Router.use('/user', userRoute);
	Router.use('/post', postRoute);
	Router.use('/comment', commentRoute);
	Router.use('/upload', uploadRoute);
	app.use('/api/v1', Router);
};
