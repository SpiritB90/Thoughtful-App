const ogs = require('open-graph-scraper')
const Post = require('../models/post')

module.exports = {
    preview
}

async function preview(req, res) {
    try {
        const urls = await Post.find({}, 'links');
        const previews = [];
        for (const urlData of links) {
            const { link } = urlData;
            const metadata = await ogs({ link });
            previews.push(metadata.data);
        }
        console.log(previews)
        res.json(previews);
    } catch (error) {
        console.error('Error fetching link previews from the database:', error);
        res.status(500).send('Error fetching link previews from the database');
    }
};
