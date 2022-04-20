const Users = require("../models/userModel");

const userCtrl = {
	getUserById: async (req, res, next) => {
		try {
			const {id} = req.params
			const data = await Users.find({_id: id}, {email: 0, password: 0});
			res.status(200).json(data);
		} catch (error) {
			next(error)
		}
	},
    editUser: async (req, res, next) => {
		try {
			const { id,email,password,...value } = req.body;
			await Users.findOneAndUpdate({ _id: req.userId }, value);
			res.status(201).json({ mess: 'update user success!' });
		} catch (error) {
			next(error);
		}
	},
}
module.exports = userCtrl; 