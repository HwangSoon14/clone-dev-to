import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
	try {
		const token = req.header('Authorization');
<<<<<<< HEAD
		if (!token) return res.status(400).json({ message: 'Invalid Authentication' });

		jwt.verify(token, process.env.GENERATE_AC_TOKEN, (err, user) => {
			if (err) return res.status(400).json({ message: 'Authorization not valid' });
=======
		if (!token) return res.status(401).json({ message: 'Invalid Authentication' });
		jwt.verify(token, process.env.GENERATE_AC_TOKEN, (err, user) => {
			if (err) 
			{
				
				return res.status(401).json({ message: 'Authorization not valid' });
			}
>>>>>>> cdf6016793ff74ea4315cb63b6508e1ec609c2f7
			req.user = user;
			next();
		});
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

export default auth;
