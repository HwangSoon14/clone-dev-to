const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = require('../models/UserModel');

const authCtrl = {
	register: async (req, res,next) => {
		try {
			const { userName, email, password } = req.body;
			const user = await Users.findOne({ email: email });
			if (user) {
				return res.status(400).json({ message: 'This email already exists' });
			}
			if (password.length < 6) {
				return res.status(400).json({ message: 'Password must be greater equal 6' });
			}
			const salt = await bcrypt.genSalt(10);
			const passwordHash = await bcrypt.hash(password, salt);
			const newUser = await new Users({
				userName: userName,
				email: email,
				password: passwordHash,
			});
			newUser.save();
			res.json({ message: 'Register success', user: newUser});
		} catch (error) {
			next(error)
		}
	},
	login: async (req, res,next) => {
		try {
			const { email, password } = req.body;
			const user = await Users.findOne({ email: email });
			if (!user) return res.status(400).json({ msg: "This email doesn't exists" });
			
			//check decrypt password with non-decrypt
			const isMatch = await bcrypt.compare(password, user.password);
			if (!isMatch) return res.status(400).json({ msg: 'Incorrect password' });
			
			//check all condition success , create ac_token, rf_token and send back to client
			const access_token = authCtrl.generateAccessToken(user);
			const refresh_token = authCtrl.generateRefreshToken(user);	

			//attach rf_token to cookie.
			res.cookie('refresh_token', refresh_token, {
				httpOnly: true,
				secure: false,
				path: '/',
				sameSite: 'strict',
			});
			const { password: passwordInDoc, ...rest } = user._doc;
			res.status(200).json({ ...rest, access_token });
		} catch (error) {
			next(error)
		}
	},
	generateAccessToken: (user) => {
		return jwt.sign(
			{
				userId: user.id,
			},
			process.env.GENERATE_AC_TOKEN,
			{ expiresIn: '1d' },
		);
	},
	generateRefreshToken: (user) => {
		return jwt.sign(
			{
				userId: user.id,
			},
			process.env.GENERATE_RF_TOKEN,
			{ expiresIn: '14d' },
		);
	},
	requestRefreshToken: async (req, res) => {
		//Take refresh token from user
		const refresh_token = req.cookies.refresh_token;
		//Send error if token is not valid
		if (!refresh_token) return res.status(401).json("You're not authenticated");
		jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
			if (err) {
				res.status(500).json({ message: err.message });
			}
			//create new access token, refresh token and send to user
			const newAccessToken = authController.generateAccessToken(user);
			const newRefreshToken = authController.generateRefreshToken(user);
			res.cookie('refresh_token', newRefreshToken, {
				httpOnly: true,
				secure: false,
				path: '/',
				sameSite: 'strict',
			});
			res.status(200).json({
				access_token: newAccessToken,
			});
		});
	},
};
module.exports = authCtrl;
