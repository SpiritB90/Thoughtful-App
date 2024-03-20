const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                const wordCount = v.trim().split(/\s+/).length
                return wordCount >= 1 && wordCount <= 20
            }
        }
    },
    content: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                const wordCount = v.trim().split(/\s+/).length
                return wordCount >= 1 && wordCount <= 300
            }
        }
    }, 
})

module.exports = mongoose.model('Post', postSchema)