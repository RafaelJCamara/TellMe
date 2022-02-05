const router = require("express").Router();
const authController = require("../controller/auth");

//register users
router.post("/register", authController.registerUser);

//login
router.post("/login", authController.login);

module.exports = router;