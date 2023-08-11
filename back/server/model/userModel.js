const prisma = require('../db/conn');

const createUser = async function(username, password, email) {
    try {
        const user = await prisma.user.create({ 
            data : {
                name: username,
                password,
                email,
            },
        })

        return user;
    } catch (err) {
        console.log(err);
        return undefined;
    }
}

const getUser = async function(userId) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            },
        });

        return user;
    } catch(err) {
        console.log(err);
        return undefined;
    }
}

const getUserFromUsername = async function(username) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                username: username,
            },
        });

        return user;
    } catch(err) {
        console.log(err);
        return undefined;
    }
}

const getListUser = async function() {
    try {
        const listUser = await prisma.user.findMany();
        return listUser;
    } catch(err) {
        console.log(err);
        return undefined;
    }
}

module.exports = {
    createUser,
    getUser,
    getListUser,
    getUserFromUsername,
}