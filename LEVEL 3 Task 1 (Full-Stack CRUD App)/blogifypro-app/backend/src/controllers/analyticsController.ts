import { Request, Response } from 'express';
import Analytics from '../models/Analytics';

export class AnalyticsController {
    public async getViewsStats(req: Request, res: Response): Promise<Response> {
        try {
            const viewsStats = await Analytics.find({ type: 'views' });
            return res.status(200).json(viewsStats);
        } catch (error) {
            return res.status(500).json({ message: 'Error retrieving views stats', error });
        }
    }

    public async getLikesStats(req: Request, res: Response): Promise<Response> {
        try {
            const likesStats = await Analytics.find({ type: 'likes' });
            return res.status(200).json(likesStats);
        } catch (error) {
            return res.status(500).json({ message: 'Error retrieving likes stats', error });
        }
    }
}