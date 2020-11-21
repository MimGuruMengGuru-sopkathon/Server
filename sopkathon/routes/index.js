var express = require('express');
var router = express.Router();

router.use('/search', require('./search'));
router.use('/detail', require('./detail'));
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
