var express = require('express');
var router = express.Router();
const documentationController = require('../controllers/documentation');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/documentation', documentationController.getDocumentation);

module.exports = router;
