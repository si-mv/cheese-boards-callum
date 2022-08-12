const {Sequelize} = require("sequelize");
/**
 * 'path' is a library built in to Node, we don't need to install it
 * It helps us work with the filesystem
 * path.join('a', 'b', 'c') will be 'a/b/c' on linux and 'a\b\c on windows!
 * 
 * __dirname is a global variable available in any file in a node project
 * it represent the directory in which the file is contained
 * it doesn't change if the file is being called from somewhere else!
 */
const path = require('path')
const db = new Sequelize ({
    dialect: "sqlite",
    storage: ':memory:',
    logging: false
});

module.exports = {db}