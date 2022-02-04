const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//register users
router.post("/register", async (req, res) => {
    try {
        const sentUser = req.body;
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(sentUser.password, salt);
        //create user in database
        const newUser = new User({
            username: sentUser.username,
            email: sentUser.email,
            password: hashedPassword
        });
        //save user in database
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//login
router.post("/login", async (req, res) => {

});

module.exports = router;