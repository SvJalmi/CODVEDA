import { Router } from 'express';
import AnalyticsController from '../controllers/analyticsController';

const router = Router();
const analyticsController = new AnalyticsController();

const setAnalyticsRoutes = (app) => {
    app.use('/api/analytics', router);
    router.get('/views', analyticsController.getViewsStats);
    router.get('/likes', analyticsController.getLikesStats);
};

export default setAnalyticsRoutes;