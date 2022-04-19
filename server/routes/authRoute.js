const router = require('express').Router();
const authController = require('../controllers/authController');

//Register Router
router.post('/register', authController.register);

//Login Router
router.post('/login', authController.login);

// //Refresh token
router.post('/refresh', authController.requestRefreshToken);

module.exports = router;
