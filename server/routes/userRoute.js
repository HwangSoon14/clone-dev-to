import express from 'express';
const router = express.Router();
import userController from '../controllers/userController.js';
import auth from '../middleware/Auth.js';
import decodeToken from '../middleware/DecodeToken.js';

// GET
router.get('/:userName', userController.getUserInfo);
router.get('/:userId/posts', userController.getUserPosts);

//Middle Authentication
router.use(auth);
router.use(decodeToken);

router.get('/posts/saved', userController.savedPost);

// POST
router.post('/posts', userController.addPost);
router.post('/posts/:id/save', userController.savePost);

// DELETE
router.delete('/posts/:id/unsave', userController.unsavePost);
router.delete('/posts/:id', userController.deletePost);

//PUT
router.put('/').put(userController.editUser);
router.put('/posts/:id', userController.editPost);

export default router;
