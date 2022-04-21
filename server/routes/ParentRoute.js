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
<<<<<<< HEAD
	app.use('/api', Router);
=======
	app.use('/api/v1', Router);
>>>>>>> 32c490a2e50be894e09e424f471c9642338122a4
};
