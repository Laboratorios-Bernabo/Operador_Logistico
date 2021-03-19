var express = require('express');
var router = express.Router();
const apiClientController = require('../controllers/clientlogin');
const apiController = require('../controllers/login')

router.get('/access', apiClientController.connect);
router.get('/login', apiController.login);
router.get('/validate', apiController.validateToken);
/* router.post('/createUser', ) */

module.exports = router;