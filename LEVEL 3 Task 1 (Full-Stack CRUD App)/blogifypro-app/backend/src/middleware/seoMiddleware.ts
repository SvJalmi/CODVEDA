import { Request, Response, NextFunction } from 'express';

export const seoMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { title, description, slug } = req.body;

    if (!title || !description || !slug) {
        return res.status(400).json({ message: 'Title, description, and slug are required for SEO.' });
    }

    // Set meta tags for SEO
    res.locals.metaTags = {
        title,
        description,
        slug,
    };

    next();
};