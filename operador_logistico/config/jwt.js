const expressJwt = require('express-jwt');
const config = require('../config.json');

module.exports = jwt;

const unprotected = [
        pathToRegexp('/out/124*'),
        '/auth/login',
        '/auth/access',
        '/documentation',
        '/out/getStock'];

function jwt() {
    const { secret } = config;
    return expressJwt({ secret, algorithms: ['HS256'] }).unless({
        path: unprotected
    });
}