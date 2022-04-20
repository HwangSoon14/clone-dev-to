const router = require('express').Router();
const uploadController = require('../controllers/uploadController');
const upload = require('../Utils/MulterStorage');

//Single File
router.post('/single',upload.single("image"), uploadController.single);

//Multiple
router.post('/multiple',upload.any(), uploadController.multiple);

//Resize Image 

module.exports = router;
