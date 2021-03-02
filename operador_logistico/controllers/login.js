const axios = require('axios');

const controller = {

    auth: async function (req, res) {

        const config = {
            method: 'get',
            url: "https://api.qa.andreani.com/login",
            headers: { 'Authorization': 'Basic Z2NpZF93czpldGpqZTUyNiE1' }
        }

        response = await axios(config);

        res.json(response.headers["x-authorization-token"]);
    }
}

module.exports = controller;