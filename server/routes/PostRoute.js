const router = require('express').Router();
const postController = require('../controllers/PostController');
const auth = require('../middleware/auth');
const decodeToken = require('../middleware/decodeToken');

router.use(auth);
router.use(decodeToken);

router.get('/my', postController.getMyPost);
router.route('/').get(postController.getAllPost).post(postController.addPost);
router.route('/:id').put(postController.editPost).delete(postController.deletePost).get(postController.getPostById);

module.exports = router;
