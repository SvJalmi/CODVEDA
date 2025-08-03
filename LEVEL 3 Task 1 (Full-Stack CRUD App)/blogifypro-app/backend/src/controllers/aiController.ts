import { Request, Response } from 'express';
import { suggestContent } from '../services/openaiService';

export class AIController {
    public async suggestContent(req: Request, res: Response): Promise<void> {
        try {
            const { prompt } = req.body;
            const suggestion = await suggestContent(prompt);
            res.status(200).json({ suggestion });
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while fetching content suggestion.' });
        }
    }
}