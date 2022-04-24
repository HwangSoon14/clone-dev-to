const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;

passport.use(
	new GitHubStrategy(
		{
			clientID: process.env.GIT_ID,
			clientSecret: process.env.GIT_SECRET,
			callbackURL: 'http://localhost:5000/api/v1/auth/github/callback',
		},
		function (accessToken, refreshToken, profile, done) {
			console.log("1")
			done(null, profile);
		},
	),
);

passport.serializeUser((user, done) => {
	console.log("2")
	return done(null,user);
});

passport.deserializeUser((user, done) => {
	console.log("3")
	return done(null,{name: "tuyenbeat"});
});
