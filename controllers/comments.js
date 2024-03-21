const Post = require('..//models/post')

module.exports = {
    create,
    delete: deleteComment
}

async function create(req, res) {
    const post = await Post.findById(req.params.id);
    post.comments.push(req.body);
    try {
        await post.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect('/home');
}

async function deleteComment(req, res) {
    console.log('delete')
    const post = await Post.findOne({'comments._id': req.params.id})
    console.log('post', post)
    const commentIndex = post.comments.findIndex(comment => comment._id.toString() === req.params.id);
    console.log('commentIndex', commentIndex)
    if (commentIndex !== -1) {
        post.comments.splice(commentIndex, 1);
    }
    await post.save()
    console.log('post')
    if (!post) return res.redirect('/home')
    res.redirect('/home')
}