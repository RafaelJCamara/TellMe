const router = require("express").Router();
const homepageController = require("../controller/homepage");

router.get("/", homepageController.getHomepage);

module.exports = router;