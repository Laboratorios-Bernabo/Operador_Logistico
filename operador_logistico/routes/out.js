var express = require('express');
var router = express.Router();
const interfacesOutController = require('../controllers/interfacesOut');


router.get('/getStock', interfacesOutController.getStock);
router.post('/124/:id', interfacesOutController.prepararPedido);
router.post('/int/:id', interfacesOutController.getTxState);
router.post('/callinterface', interfacesOutController.callInterface);
/* router.post('/createUser', ) */

module.exports = router;