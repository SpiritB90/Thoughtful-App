var express = require('express');
var router = express.Router();
// const repliesCtrl = require('../controllers/replies')

router.get('/', function(req, res) {
    res.render('users/replies');
  });

module.exports = router