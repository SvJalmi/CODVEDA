import mongoose, { Schema, Document } from 'mongoose';

export interface IComment extends Document {
    blogId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    content: string;
    createdAt: Date;
}

const CommentSchema: Schema = new Schema({
    blogId: { type: mongoose.Types.ObjectId, required: true, ref: 'Blog' },
    userId: { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

export const Comment = mongoose.model<IComment>('Comment', CommentSchema);