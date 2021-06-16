const axios = require('axios');
const { json } = require('express');
const tokenController = require('../config/getToken');

const controller = {
    crearPedido: async (_data_, _query_param_) => {
        var token = await tokenController.connect();
        
        var url = `https://apisqa.andreani.com/almacenes/v1/${_query_param_}/pedidos`;
        
        const headers = {
            'x-authorization-token':token
        };

       

        var resp = await axios.post(url,_data_, {headers: headers} );
        
        return resp.data;

    }
};

module.exports = controller;

