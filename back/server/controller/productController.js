let listProducts = [];

const createProduct = function(name, price, description, quantity) {
    listProducts.push({name, price, description, quantity});
}

const removeProduct = function(id) {
    
}

module.exports = {
    userList,
    createAccount,
}