var express = require('express');
var router = express.Router();
var postCtrl = require('../controllers/posts')
var commentCtrl = require('../controllers/comments')



/* GET users listing. */
// router.get('/', function(req, res) {
//   res.render('users/index')
// });

router.get('/', postCtrl.index)

router.put('/:id', postCtrl.update)

router.delete('/:id', postCtrl.delete)

router.post('/', postCtrl.create)

router.post('/:id/comment', commentCtrl.create)

router.delete('/:id/comment', commentCtrl.delete)


// router.get('/:id', postCtrl.show)


module.exports = router;

