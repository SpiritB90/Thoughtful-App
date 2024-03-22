const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    content: {
        type: String,
        validate: {
            validator: function(v) {
                const wordCount = v.trim().split(/\s+/).length
                return wordCount >= 1 && wordCount <= 55
            }
        }
    },
},{
    timestamps: true

})

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
    mood: {
        type: String,
        enum: ['🙂', '😔', '😎', '😆', '😀', '😢', '']
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
    links: {
        type: String
    }, 
    comments: [commentSchema]

},{
    timestamps: true    

})

module.exports = mongoose.model('Post', postSchema)