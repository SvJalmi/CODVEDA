import { Router } from 'express';
import BlogController from '../controllers/blogController';

const router = Router();
const blogController = new BlogController();

export function setBlogRoutes(app) {
    app.use('/api/blogs', router);
    
    router.post('/', blogController.createBlog);
    router.put('/:id', blogController.editBlog);
    router.delete('/:id', blogController.deleteBlog);
    router.get('/', blogController.getBlogs);
}