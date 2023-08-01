const express = require('express')
const router = express.Router()
const { login, authenticateToken } = require('../controller/authController.js')

router.get('/login/', authenticateToken, (req, res) => {
    try {
        const {username, password} = req.body;
        if(login(username, password)) {
            res.sendStatus(201);
        } else {
            res.sendStatus(401);
        }
    } catch(err) {
        res.sendStatus(500);
    }
});

module.exports = router;
