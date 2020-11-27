var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let result = {
    meta: {
    status: 200,
    total: 1,   
    url: "/api/users",
    href: "http://",
    

    },
    data: {message: "If you receive this message, you have successfully used the API from Laboratorios Bernabo"}
};
  res.json(result);
});

module.exports = router;
