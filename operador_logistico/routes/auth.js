var express = require('express');
var router = express.Router();
const apiController = require('../controllers/login');

router.get('/login', apiController.auth);

module.exports = router;