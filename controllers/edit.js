const Post = require('..models/post')

module.exports = {
    edit,
    updatePost
}

async function edit(req, res) {
    const post = await Post.findById(req.params.id)
    res.render('users/edit', {post})
}

async function updatePost(req, res) {
    const post = await Post.findbyIdAndUpdate(req.params.id, req.body)
    res.redirect('/home', {post})
}