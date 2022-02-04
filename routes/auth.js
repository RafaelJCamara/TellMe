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
        res.status(500).json(err);
    }
});

//login
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        //check if email exists
        const foundUser = await User.findOne({ email });
        if (!foundUser) res.status(404).json({
            message: "Error! No such user was found."
        });

        //if email exists check if passwords are matching
        const validPassword = await bcrypt.compare(password, foundUser.password);
        if (!validPassword) res.status(400).json({
            message: "Error! Passwords are not matching."
        });

        res.status(200).json(foundUser);

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;