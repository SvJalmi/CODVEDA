import { Router } from 'express';
import CommentController from '../controllers/commentController';

const router = Router();
const commentController = new CommentController();

export const setCommentRoutes = (app) => {
    router.post('/comments', commentController.addComment);
    router.delete('/comments/:id', commentController.deleteComment);
    router.get('/comments/:blogId', commentController.getComments);

    app.use('/api', router);
};