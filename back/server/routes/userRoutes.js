const express = require('express');
const router = express.Router();
const { createAccount, getUser, getListUser } = require('../controller/userController');
const auth = require('../controller/authController');

router.post('/createAccount', async (req, res) => {
    try {
        console.log(req.body);

        const {username, password, email} = req.body;

        const user = await createAccount(username, password, email);

        if(user) {
            res.status(201).send(user);
        } else {
            res.sendStatus(400);
        }
    } catch (err) {
        res.sendStatus(500);
    }
});

router.get('/getById/:id', auth.authenticateToken, async (req, res) => {
    try {
        const user = await getUser(Number(req.params.id));
        if(user) {
            res.send(user);
        } else {
            res.sendStatus(400);
        }
    } catch (err) {
        res.sendStatus(500);
    }
});

router.get('/list', auth.authenticateToken, async (req, res) => {
    try {
        const listUser = await getListUser();
        res.send(listUser);
    } catch (err) {
        res.sendStatus(500);
    }
});

module.exports = router;