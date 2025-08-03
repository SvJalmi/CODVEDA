import { Schema, model } from 'mongoose';

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    slug: {
        type: String,
        unique: true,
        required: true,
    },
    meta: {
        description: {
            type: String,
            default: '',
        },
        keywords: {
            type: [String],
            default: [],
        },
    },
    image: {
        type: String,
        default: '',
    },
    views: {
        type: Number,
        default: 0,
    },
    likes: {
        type: Number,
        default: 0,
    },
});

const Blog = model('Blog', blogSchema);

export default Blog;