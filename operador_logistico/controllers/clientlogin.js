const axios = require('axios');
const btoa = require('btoa');
const usr = 'YYY';
const pass = 'XXX';
const bcrypt = require('bcryptjs');
const path = require('path');
const { response } = require('../app');


const dbToken = path.join(__dirname, '../data/token.json');
const controller = {

    connect: async function (req, res) {
        
        const config = {
            method: 'get',
            url: "https://api.qa.andreani.com/login",
            headers: { 'Authorization': `Basic ${btoa(usr + ':' + pass)}` }
        }

        response = await axios(config);
        model.create({id: m.genId(dbToken), token: response.headers["x-authorization-token"]}, dbToken);
       return res.json(response.headers["x-authorization-token"]);
    }
}

module.exports = controller;
