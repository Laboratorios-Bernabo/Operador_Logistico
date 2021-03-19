const axios = require('axios');
const btoa = require('btoa');
const bcrypt = require('bcryptjs');
const user = "Andreani_QA";
const pass = "XKRe16";
const config = require('../config.json');
const jwt = require('jsonwebtoken');

const controller = {

    validateToken:  (req, res) =>{
        let token = req.headers['authorization'];
        if(!token){
            return res.status(401).send({ auth: false, message: 'No token provided.' });
        }
/*         let result = jwt.verify(token);

        console.log(result); */

        return res.status(200).send({message: 'Validación Ok'});
    },
    login:  (req, res) => {
        let credentials = req.headers['authorization'];

        let dbUser = btoa(user + ':' + pass);
        if (credentials == dbUser ){
        // Create the token
        const token = jwt.sign({ sub: user }, config.secret, { expiresIn: '7d' });

        res.setHeader('token', token);
        return res.status(200).send({ auth: true, message: 'Access ok' });

        }else{

        return res.status(401).send({ auth: false, message: 'Incorrect Credentials' });
        }
    }
}

module.exports = controller;