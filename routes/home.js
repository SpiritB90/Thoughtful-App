var express = require('express');
var router = express.Router();
var postCtrl = require('../controllers/posts')



/* GET users listing. */
router.get('/', function(req, res) {
  res.render('users/index')
});

router.get('/', postCtrl.index)

// router.put('/:id', postCtrl.update)

router.delete('/id', postCtrl.delete)

// router.post('/', postsCtrl.create)


module.exports = router;

