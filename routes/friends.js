var express = require('express');
var router = express.Router();
// const friendsCtrl = require('../controllers/friends')

router.get('/', function(req, res) {
    res.render('users/friends')
})

module.exports = router