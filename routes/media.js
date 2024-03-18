var express = require('express');
var router = express.Router();
// const mediaCtrl = require('../controllers/media')

router.get('/', function(req, res) {
    res.render('users/media');
  });

module.exports = router