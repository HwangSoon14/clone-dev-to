const Router = require('express').Router();
const authRoute = require('./authRoute');
const uploadRoute = require('./uploadRoute');
const postRoute = require('./PostRoute');
const userRoute = require('./userRoute');

module.exports = function (app) {
	Router.use('/auth', authRoute);
	Router.use('/user', userRoute);
	Router.use('/post', postRoute);
	Router.use('/upload', uploadRoute);
	app.use('/api', Router);
};
