const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("From user route.");
});

module.exports = router;