const router = require('express').Router();
const postController = require('../controllers/PostController');
const auth = require('../middleware/auth');
const decodeToken = require('../middleware/decodeToken');

router.use(auth);
router.use(decodeToken);

router.route('/').get(postController.getPost).post(postController.addPost);
router.route('/:id').put(postController.editPost).delete(postController.deletePost);

module.exports = router;
