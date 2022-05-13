import express from 'express';
const router = express.Router();
import postCtrl from '../controllers/PostController.js';
import auth from '../middleware/Auth.js';
import decodeToken from '../middleware/DecodeToken.js';

//Token Decryption Middleware
router.use(decodeToken);

// GET
router.get('/all', postCtrl.getAllPost);
router.get('/latest', postCtrl.getLatest);
router.get('/relevant', postCtrl.getRelevant);
router.get('/top/:type', postCtrl.getTopPost);
router.get('/tags', postCtrl.getTags);
router.get('/:id/comments', postCtrl.getCommentsByPostId);
router.get('/:slug', postCtrl.getPostBySlug);

// Middleware Check Permissions
router.use(auth);

// POST
router.post('/:id/like', postCtrl.likePost);
router.post('/:id/unlike', postCtrl.unlikePost);
router.post('/:id/comments', postCtrl.addComment);

//PUT
router.put('/comments/:id', postCtrl.editComment);

//DELETE
router.delete('/:id/comments/:idc', postCtrl.deleteComment);

export default router;
