const Post = require('../models/post')

module.exports = {
    create,
    index,
    // update,
    delete: deletePost
}

async function index(req, res) {
    const posts = await Post.find({})
    res.render('users/index', posts)
}

async function deletePost(req, res) {
    const post = await Post.findOne({'posts._id': req.params.id, 'posts': req.post._id})
    if (!post) return res.redirect('/home')
    post.remove(req.params.id)
    await post.save()
    res.redirect(`/home/${post.id}`)
}

async function create(req,res) {
    try {
        const posts = await Post.create(req.body)
        res.redirect(`/home${post._id}`)
    } catch (err) {
        console.log(err)
        res.render('users/index', {errorMsg: err.message})
    }
}