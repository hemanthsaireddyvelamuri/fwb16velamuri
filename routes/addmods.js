var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var query = req.query 
console.log(`rows ?{10}`) 
console.log(`cols &{3}`)

    res.render('addmods', { title: `Addmods`,query: query });
});

module.exports = router;
