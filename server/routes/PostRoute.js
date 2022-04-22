const router = require('express').Router();
const postController = require('../controllers/PostController');
const auth = require('../middleware/Auth');
const decodeToken = require('../middleware/DecodeToken');

router.use(auth);
router.use(decodeToken);
router.post('/like/:postId', postController.likePost)
router.post('/unlike/:postId', postController.unlikePost)
router.route('/').get(postController.getAllPost).post(postController.addPost);
router.route('/:id').put(postController.editPost).delete(postController.deletePost).get(postController.getPostById);

module.exports = router;
