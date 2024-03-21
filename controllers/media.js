const Post = require('../models/post')

module.exports = {
    index
}

async function index(req, res) {
    const posts = await Post.find({})
    console.log(posts)
    // const comments = await Post.comments.find({})
    res.render('users/media', {posts})
}