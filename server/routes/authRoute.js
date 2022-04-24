const router = require('express').Router();
const authController = require('../controllers/AuthController');
const session = require('express-session');
const passport = require('passport');
require('../Utils/PassPortConfig');

router.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: true,
		cookie: {
			httpOnly: true,
			secure: false,
		},
	}),
);

router.use(passport.session());
router.use(passport.initialize());

router.get('/github', passport.authenticate('github'));

router.get('/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), (req, res) => {
	res.redirect('http://localhost:5000/api/v1/auth/data');
}),
	router.get('/data', (req, res) => {
		res.json(req.user);
	});
router.get('/logout', (req, res) => {
	req.logout();
	res.json('logout thành công');
});

//Register Router
router.post('/register', authController.register);

//Login Router
router.post('/login', authController.login);

// //Refresh token
router.post('/refresh', authController.requestRefreshToken);

module.exports = router;
