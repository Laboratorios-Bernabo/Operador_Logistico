const axios = require('axios');
const { json } = require('express');
const tokenController = require('../config/getToken');

function logError(message){
    var today = new Date()
    var todayFormatted = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    console.error("===================================");
    console.error("=>Error al procesar interfaz");
    console.error("==>Fecha: " + todayFormatted);
    console.error(message);
    console.error("===================================");
}

const controller = {
    crearPedido: async (_data_, _query_param_) => {
        var resp = "empty value"
        try{
        var token = await tokenController.connect();
        
        var url = `https://apisqa.andreani.com/almacenes/v1/${_query_param_}/pedidos`;
        
        const headers = {
            'x-authorization-token':token
        };

        var resp = await axios.post(url,_data_, {headers: headers} );
        return resp.data;

        }catch(error){
            logError(error);
            console.log('imprimo error dentro del catch');
            console.log(error);
            return(error.response.data.title);
        }
        
    }
};

module.exports = controller;

