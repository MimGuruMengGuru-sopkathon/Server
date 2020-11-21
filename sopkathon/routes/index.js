var express = require('express');
var router = express.Router();

router.use('/search', require('./search'));
router.use('/detail', require('./detail'));
router.use('/posts', require('./posts'));

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
