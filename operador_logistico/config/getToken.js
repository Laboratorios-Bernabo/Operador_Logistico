const axios = require('axios');
const btoa = require('btoa');
const usr = 'bernabo_ws';
const pass = 'pNqdMN4nZJHqeJ!!';
const bcrypt = require('bcryptjs');
const path = require('path');
//const { response } = require('../app');


const dbToken = path.join(__dirname, '../data/token.json');
const controller = {

    connect: async function () {
        
        const config = {
            method: 'get',
            url: "https://api.qa.andreani.com/login",
            headers: { 'Authorization': `Basic ${btoa(usr + ':' + pass)}` }
        }

        const resp = await axios(config);
       // console.log(resp.headers['x-authorization-token']);
       // model.create({id: model.genId(dbToken), token: response.headers["x-authorization-token"]}, dbToken);
       return resp.headers['x-authorization-token'];
    }
}

module.exports = controller;