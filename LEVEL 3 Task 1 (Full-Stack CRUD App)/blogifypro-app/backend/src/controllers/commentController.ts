import { Request, Response } from 'express';
import Comment from '../models/Comment';

class CommentController {
    async addComment(req: Request, res: Response) {
        try {
            const { blogId, userId, content } = req.body;
            const newComment = new Comment({ blogId, userId, content });
            await newComment.save();
            res.status(201).json(newComment);
        } catch (error) {
            res.status(500).json({ message: 'Error adding comment', error });
        }
    }

    async deleteComment(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await Comment.findByIdAndDelete(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting comment', error });
        }
    }

    async getComments(req: Request, res: Response) {
        try {
            const { blogId } = req.params;
            const comments = await Comment.find({ blogId });
            res.status(200).json(comments);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching comments', error });
        }
    }
}

export default new CommentController();