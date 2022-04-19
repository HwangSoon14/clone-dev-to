const cloudinary = require('../Utils/UploadCloudinary');
const fs = require('fs');

const uploadCtrl = {
	single: async (req, res) => {
		try {
			const data = await cloudinary.uploader.upload(req.file.path, {
				folder: 'images',
			});
			fs.unlinkSync(req.file.path);
			res.json({
				nameImage: req.file.originalname.split('.')[0],
				urlImage: data.url,
				idImage: data.id,
			});
		} catch (error) {}
	},
	multiple: async (req, res) => {
		try {
			const arrPromise = req.files.map(async (file) => {
				const result = await cloudinary.uploader.upload(file.path, {
					folder: 'images',
				});
				fs.unlinkSync(file.path);
				return {
					nameImage: file.originalname.split('.')[0],
					urlImage: result.url,
					idImage: result.id,
				};
			});
			const data = await Promise.all(arrPromise);
			res.json(data);
		} catch (error) {}
	},
};
module.exports = uploadCtrl;
