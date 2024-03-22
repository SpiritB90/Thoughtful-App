const Post = require('../models/post')
const ogs = require('open-graph-scraper')

module.exports = {
    index,
    // preview
}
// async function preview(req, res) {
//     try {
//         const urls = await Post.find({}, 'links');
//         const previews = [];
//         for (const urlData of links) {
//             const { link } = urlData;
//             const metadata = await ogs({ link });
//             previews.push(metadata.data);
//         }
//         console.log(previews)
//         res.json(previews);
//     } catch (error) {
//         console.error('Error fetching link previews from the database:', error);
//         res.status(500).send('Error fetching link previews from the database');
//     }
// };

async function index(req, res) {
    try {
    const posts = await Post.find({})
    // const urls = await Post.find({}, 'links');
    const previews = [];
    for (const urlData of posts) {
        console.log(urlData)
        const options = {
            url: urlData.links,
            customMetaTags: [{
              multiple: false, // is there more than one of these tags on a page (normally this is false)
              property: 'hostname', // meta tag name/property attribute
              fieldName: 'hostnameMetaTag', // name of the result variable
            }],
          };
        // const { links } = urlData;
        const metadata = await ogs( options );
        console.log(metadata.result)
        previews.push(metadata.result);
    }
    console.log(previews)
    // const comments = await Post.comments.find({})
    res.render('users/media', {posts, previews})
    }  catch (error) {
        console.error('Error fetching link previews from the database:', error);
        res.status(500).send('Error fetching link previews from the database');
    }
}