import { Router } from 'express';
import AIController from '../controllers/aiController';

const router = Router();
const aiController = new AIController();

export const setAIRoutes = (app) => {
    app.use('/api/ai', router);
    router.post('/suggest-content', aiController.suggestContent);
};