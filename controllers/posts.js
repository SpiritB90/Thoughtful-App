const Post = require('../models/post')

module.exports = {
    create,
    index,
    update,
    delete: deletePost
}

async function index(req, res) {
    const posts = await Post.find({})
    console.log(posts)
    // const comments = await Post.comments.find({})
    res.render('users/index', {posts})
}

async function deletePost(req, res) {
    const post = await Post.findByIdAndDelete(req.params.id)
    if (!post) return res.redirect('/home')
    res.redirect('/home')
}

async function create(req,res) {
    try {
        const post = await Post.create(req.body)
        res.redirect('/home')
    } catch (err) {
        console.log(err)
        res.redirect('/home')

    }
}

async function update(req, res) {
        const post = await Post.findByIdAndUpdate(req.params.id)
        if (!post) return res.redirect('/home')
        res.redirect('/home')
}