const axios = require('axios');

const controller = {

    auth: async function (req, res) {

        const config = {
            method: 'get',
            url: "https://api.qa.andreani.com/login",
            headers: { 'Authorization': 'Basic Z2NpZF93czpldGpqZTUyNiE1' }
        }

        response = await axios(config);

        console.log(response.headers["x-authorization-token"]);

        res.redirect('/');
    }
}

module.exports = controller;