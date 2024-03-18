var express = require('express');
var router = express.Router();
// const usersCtrl = require('../controllers/users')

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('users/index');
});


module.exports = router;

