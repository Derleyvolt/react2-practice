const express = require('express');
const router = express.Router();
const { createAccount } = require('../controller/userController');

router.get('/createAccount', (req, res) => {
    try {
        const {username, password, email} = req.body;

        if(createAccount(username, password, email)) {
            res.sendStatus(201);
        } else {
            res.sendStatus(401);
        }
    } catch (err) {
        res.sendStatus(500);
    }
});

module.exports = router;