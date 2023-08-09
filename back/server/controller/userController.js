const user = require('../model/userModel');

let userList = [{username: 'derley', password: '123'},
];

const createAccount = async function(username, password, email) {
    console.log('test');
    return await user.createUser(username, password, email);
}

const getUser = async function(userId) {
    return await user.getUser(userId);
}

const getListUser = async function() {
    return await user.getListUser();
}

module.exports = {
    userList,
    createAccount,
    getUser,
    getListUser
}