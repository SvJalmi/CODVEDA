import { Request, Response } from 'express';
import Blog from '../models/Blog';

class BlogController {
    async createBlog(req: Request, res: Response) {
        try {
            const blog = new Blog(req.body);
            await blog.save();
            res.status(201).json(blog);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async editBlog(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, { new: true });
            if (!updatedBlog) {
                return res.status(404).json({ message: 'Blog not found' });
            }
            res.json(updatedBlog);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteBlog(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const deletedBlog = await Blog.findByIdAndDelete(id);
            if (!deletedBlog) {
                return res.status(404).json({ message: 'Blog not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getBlogs(req: Request, res: Response) {
        try {
            const blogs = await Blog.find();
            res.json(blogs);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default new BlogController();