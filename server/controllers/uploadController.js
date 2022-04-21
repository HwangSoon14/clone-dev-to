const cloudinary = require('../Utils/UploadCloudinary');
const fs = require('fs');

const uploadCtrl = {
	single: async (req, res, next) => {
		try {
			const data = await cloudinary.uploader.upload(req.file.path, {
				folder: 'images',
			});
			fs.unlinkSync(req.file.path);
			res.json({
				nameImage: req.file.originalname.split('.')[0],
				urlImage: data.url,
				idImage: data.public_id,
			});
		} catch (error) {
			next(error)
		}
	},
<<<<<<< HEAD
	multiple: async (req, res) => {
		try {
			const arrPromise = req.files.map(async (a) => {
=======
	multiple: async (req, res,next) => {
		try {
			const arrPromise = req.files.map(async (file) => {
>>>>>>> 32c490a2e50be894e09e424f471c9642338122a4
				const result = await cloudinary.uploader.upload(file.path, {
					folder: 'images',
				});
				fs.unlinkSync(file.path);
				return {
					nameImage: file.originalname.split('.')[0],
					urlImage: result.url,
					idImage: result.public_id,
				};
			});
			const data = await Promise.all(arrPromise);
			res.json(data);
		} catch (error) {
			next(error)
		}
	},
};
module.exports = uploadCtrl;
