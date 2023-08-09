const jwt = require('jsonwebtoken');
const { userList } = require('./userController')
const user         = require('../model/userModel')

const generateAccessToken = function(username, role, seconds) {
    const payload = {
        username,
        role,
    };

    return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: `${seconds}s` });
}

async function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) {
        return res.sendStatus(401)
    }

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        console.log(decoded);
        const { username, password, role } = decoded;
        res.cookie('Authorization', 
                    generateAccessToken(username, password, role), {
                        sameSite: 'None',  // Cookie será enviado em solicitações cross-site
                        secure: false       // Cookie será enviado somente em conexões HTTPS
        });
        next();
    } catch (err) {
        res.sendStatus(403);
    }
}

const login = function(username, password) {
    const user = user.getUserFromUsername(username);
    
    if (user.password == password) {
        return true;
    }

    return false;
}

const logout = function(req, res) {

}

module.exports = {
    generateAccessToken,
    authenticateToken,
    login,
}