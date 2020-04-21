var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/index_category', function(req, res) {
  setTimeout(function() {
    const data = require('../data/index_category.json')
    res.send({ code: 0, data })
  }, 300)
})
module.exports = router;
