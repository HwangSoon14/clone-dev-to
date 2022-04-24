const router = require('express').Router();
const userController = require('../controllers/UserController');
const auth = require('../middleware/Auth');
const decodeToken = require('../middleware/DecodeToken');
const sendMail = require('../Utils/SendMail');

router.get('/forgot', async (req, res) => {
	await sendMail('tuyen197.it@gmail.com', 'tuyenbeat', '656506');
	res.send('check mail');
});
router.get('/:id', userController.getUserById);
router.get('/posts/:userId', userController.getPostsByUser);
//Middle Authentication
router.use(auth);
router.use(decodeToken);

//Update User
router.route('/').put(userController.editUser);

module.exports = router;
