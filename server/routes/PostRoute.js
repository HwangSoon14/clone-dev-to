const router = require('express').Router();
const postController = require('../controllers/PostController');
const auth = require('../middleware/auth');
const decodeToken = require('../middleware/decodeToken');

router.use(auth);
router.use(decodeToken);

<<<<<<< HEAD
router.route('/').get(postController.getPost).post(postController.addPost);
router.route('/:id').put(postController.editPost).delete(postController.deletePost);
=======
router.get('/my', postController.getMyPost);
router.route('/').get(postController.getAllPost).post(postController.addPost);
router.route('/:id').put(postController.editPost).delete(postController.deletePost).get(postController.getPostById);
>>>>>>> 32c490a2e50be894e09e424f471c9642338122a4

module.exports = router;
