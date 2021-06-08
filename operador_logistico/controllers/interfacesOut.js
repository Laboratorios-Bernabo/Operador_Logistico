const axios = require('axios');
const btoa = require('btoa');
const usr = 'bernabo_ws';
const pass = 'pNqdMN4nZJHqeJ!!';
const bcrypt = require('bcryptjs');
const model = require('../config/model');
const int_124 = require('../services/124SalesOrder');
const tokenController = require('../config/getToken');
const controller = {

    prepararPedido: async function (req, res) {
        let resp = int_124.crearPedido(req.body._data_, queryParam);
        return res.json(resp.data);
    },

    getStock: async function (req, res) {

        var token = await tokenController.connect();
    
       /* return res.json(response.headers["x-authorization-token"]); */
        
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