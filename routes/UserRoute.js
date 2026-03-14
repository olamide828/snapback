const express = require("express");
const router = express.Router();
const User = require("../model/user.js");


router.post("/login", async (req, res) => {
    const {username, password, phoneNumber} = req.body;
    try {
        const user = await User.create({username, password, phoneNumber});
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

module.exports = router;