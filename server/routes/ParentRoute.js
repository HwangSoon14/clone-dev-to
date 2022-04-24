const Router = require('express').Router();
const authRoute = require('./authRoute');
const uploadRoute = require('./UploadRoute');
const postRoute = require('./PostRoute');
const userRoute = require('./UserRoute');

module.exports = function (app) {
	Router.use('/auth', authRoute);
	Router.use('/users', userRoute);
	Router.use('/posts', postRoute);
	Router.use('/uploads', uploadRoute);
	app.use('/api/v1', Router);
};
