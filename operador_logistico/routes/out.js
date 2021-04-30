var express = require('express');
var router = express.Router();
const interfacesOutController = require('../controllers/interfacesOut');


router.get('/getStock', interfacesOutController.getStock);

/* router.post('/createUser', ) */

module.exports = router;