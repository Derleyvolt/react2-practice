const express = require('express')
const router = express.Router()
const { login, authenticateToken, generateAccessToken } = require('../controller/authController.js')

router.use(express.json());

router.post('/login/', (req, res) => {
    try {
        const {username, password} = req.body;
        if(login(username, password)) {
            res.cookie('Authorization', `Bearer ${generateAccessToken(username, 'admin', 60)}`);
            res.sendStatus(200);
        } else {
            res.sendStatus(401);
        }
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

module.exports = router;
