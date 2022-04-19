const router = require('express').Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');
const decodeToken = require('../middleware/decodeToken');

router.get('/:id', userController.getUserById);

router.use(auth);
router.use(decodeToken);
//Update User
router.route('/').put(userController.editUser).get(userController.getUser);
module.exports = router;
