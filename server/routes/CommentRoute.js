const router = require('express').Router();
const commentController = require('../controllers/CommentController');
const decodeToken = require('../middleware/DecodeToken');
const auth = require('../middleware/Auth');

router.use(auth);
router.use(decodeToken);
router.post('/:postId', commentController.addComment);
router.route('/:id').put(commentController.editComment).delete(commentController.deleteComment);
module.exports = router;
