var express = require('express');
var router = express.Router();
var postCtrl = require('../controllers/posts')

router.get('/', function(req, res) {
    res.render('users/new')
})

router.post('/', postCtrl.create)

module.exports = router