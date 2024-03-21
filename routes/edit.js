var express = require('express');
var router = express.Router();
var editCtrl = require('../controllers/edit')

router.get('/:id', editCtrl.edit)

router.post('/:id', editCtrl.updatePost)

module.exports = router