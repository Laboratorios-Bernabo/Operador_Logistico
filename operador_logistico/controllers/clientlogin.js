const axios = require('axios');
const btoa = require('btoa');
const usr = 'bernabo_ws';
const pass = 'pNqdMN4nZJHqeJ!!';
const bcrypt = require('bcryptjs');

const controller = {

    connect: async function (req, res) {
        
        const config = {
            method: 'get',
            url: "https://api.qa.andreani.com/login",
            headers: { 'Authorization': `Basic ${btoa(usr + ':' + pass)}` }
        }

        response = await axios(config);
        console.log('RTA: ');
        console.log(response);
       return res.json(response.headers["x-authorization-token"]);
    }
}

module.exports = controller;