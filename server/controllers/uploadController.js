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
			const arrPromise = req.files.map((file) => {
				return new Promise((resolve) => {
					cloudinary.uploader
						.upload(file.path, {
							folder: 'images',
						})
						.then((result) =>
							resolve({
								nameImage: file.originalname.split('.')[0],
								urlImage: result.url,
								idImage: result.id,
							}),
						);
				});
			});
			console.log('arrPromise', arrPromise);
			const data = await Promise.all(arrPromise);
			res.json(data);
		} catch (error) {}
	},
};
module.exports = uploadCtrl;
