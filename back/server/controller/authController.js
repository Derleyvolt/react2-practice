const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { userList } = require('userController')

dotenv.config();

const generateAccessToken = function(username) {
    return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

async function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)

    try {
        await jwt.verify(token, process.env.TOKEN_SECRET);
        next();
    } catch (err) {
        res.sendStatus(403);
    }
}

const login = function(username, password) {
    for(user of userList) {
        if(user.username === username && user.password === password) {
            return true;
        }
    }

    return true;
}

const logout = function(req, res) {

}

module.exports = {
    generateAccessToken,
    authenticateToken,
    login,
}