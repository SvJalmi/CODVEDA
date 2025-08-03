import { Request, Response } from 'express';

export const handleError = (res: Response, message: string, statusCode: number) => {
    res.status(statusCode).json({ error: message });
};

export const validateRequestBody = (body: any, requiredFields: string[]) => {
    for (const field of requiredFields) {
        if (!body[field]) {
            return false;
        }
    }
    return true;
};

export const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
};