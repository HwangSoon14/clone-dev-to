const router = require('express').Router();
const postCtrl = require('../controllers/PostController');
const auth = require('../middleware/Auth');
const decodeToken = require('../middleware/DecodeToken');

// GET
router.get('/all', postCtrl.getAllPost);
router.get('/:id/comments', postCtrl.getCommentsByPostId);
router.get('/tags', postCtrl.getTags);
router.get('/:slug', postCtrl.getPostBySlug);

// Middleware Check Permissions
router.use(auth);

//Token Decryption Middleware
router.use(decodeToken);

// POST
router.post('/:id/like', postCtrl.likePost);
router.post('/:id/unlike', postCtrl.unlikePost);
router.post('/:id/comments', postCtrl.addComment);

//PUT
router.put('/comments/:id', postCtrl.editComment);

//DELETE
router.delete('/:id/comments/:idc', postCtrl.deleteComment);

module.exports = router;
