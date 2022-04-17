const router = require("express").Router();
const userController = require("../controllers/userController");


//Register Router
router.post("/register", userController.register);

//Login Router
router.post("/login" , userController.login);

module.exports = router;