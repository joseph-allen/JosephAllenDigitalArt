var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Joseph Allen Digital Art' });
});

router.get('/About', function(req, res, next) {
  res.render('about', { title: 'Joseph Allen Digital Art About Me' });
});

router.get('/Portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'Joseph Allen Digital Art Portfolio' });
});
module.exports = router;
