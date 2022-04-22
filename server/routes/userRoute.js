const router = require('express').Router();
const userController = require('../controllers/UserController');
const auth = require('../middleware/Auth');
const decodeToken = require('../middleware/DecodeToken');



router.get('/:id', userController.getUserById);
router.get("/posts/:userId", userController.getPostsByUser);

//Middle Authentication
router.use(auth);
router.use(decodeToken);

//Update User
router.route('/').put(userController.editUser);

module.exports = router;

