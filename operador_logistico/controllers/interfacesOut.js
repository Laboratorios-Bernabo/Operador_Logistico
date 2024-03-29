const axios = require('axios');
const btoa = require('btoa');
const usr = 'bernabo_ws';
const pass = 'pNqdMN4nZJHqeJ!!';
const bcrypt = require('bcryptjs');
const int124 = require('../services/124SalesOrder');
const tokenController = require('../config/getToken');
const controller = {

    getTxState: async function (req, res){

        console.log("imprimo el body:");
        console.log(req.body);

        var theUrl = `https://apisqa.andreani.com/almacenes/v1/${req.body.idalmacen}/pedidos/${req.body.txid}`;

        console.log("imprimo la url");
        console.log(theUrl);

        var resp = await axios.get(theUrl);

        res.status(200).send(resp.data.estado);

    },
    

    callInterface: async function (req, res){
        console.log(req.body.address);
        if (req.body.address) {
            var theUrl = req.body.address;
            var dataPost = req.body.bodydata;
            if (dataPost){
                var resp = await axios.post(theUrl, dataPost);
            }else{
            var resp = await axios.get(theUrl);
            }
            return res.status(200).send(resp.data);
        }else{
            return res.status(404).send("URL No encontrada. enviar correo a soporte@laboratoriosbernabo.com")
        }  
    },
    prepararPedido: async function (req, res) {

        var resp = await int124.crearPedido(req.body, req.params.id);
        
        
        res.status(200).send(resp);
    },

    getStock: async function (req, res) {

        var token = await tokenController.connect();
    
        
        
       const config = {
        method: 'get',
        url: "https://apisqa.andreani.com/almacenes/v1/foto-de-stock?cliente=0000106569&articulo=1001&fechaDesde=2020-12-16&fechaHasta=2020-12-17",
        headers: { 'x-authorization-token': `${token}` }
        }
        //console.log(config);
        var resp = await axios(config);


        return res.json(resp.data);

    },
    newMaterial: async (req, res) => {

        var result = {
            "almacen": "1001",
            "contrato": "0000106569",
            "planta": "BENAVIDEZ",
            "detalleDeArticulo": {
                "camposLibres": [
                    {
                        "contenido": "string",
                        "meta": "string"
                    }
                ],
                "caracteristicas": [
                    {
                        "contenido": "string",
                        "meta": "string"
                    }
                ],
                "claseDeArticulo": "string",
                "claseDeExpedicion": "string",
                "codigoArticulo": "DUR60",
                "consumoEnDias": 0,
                "descripcion": "PILAS AAA ORIGINALES",
                "esNumeroDeSerieDeEntradaUnico": true,
                "esNumeroDeSerieSalidaUnico": true,
                "grupos": [
                    {
                        "contenido": "string",
                        "meta": "string"
                    }
                ],
                "instruccionesDePreparacion": "string",
                "lote": {
                    "codigo": "string",
                    "datosAdicionales": [
                        {
                            "contenido": "string",
                            "meta": "string"
                        }
                    ],
                    "fechaDeVencimiento": "2020-10-20T15:05:39.16",
                    "loteDeFabricante": "string"
                },
                "notas": "string",
                "otrosDatos": [
                    {
                        "contenido": "string",
                        "meta": "string"
                    }
                ],
                "paisDeOrigen": "string",
                "pesoBruto": 0,
                "pesoNeto": 0,
                "pesoTara": 0,
                "propietario": "DURACELL",
                "requierecapturaTotalNumSeries": true,
                "vencimientoEnDias": 0,
                "volumen": 0
            }
        }
    }
}

module.exports = controller;