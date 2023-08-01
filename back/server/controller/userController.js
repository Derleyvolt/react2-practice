let userList = [];

const createAccount = function(username, password, email) {
    for(user of userList) {
        if(user.username === username) {
            return false;
        }
    }

    userList.push({username, password, email});
    return true;
}

module.exports = {
    userList,
    createAccount,
}