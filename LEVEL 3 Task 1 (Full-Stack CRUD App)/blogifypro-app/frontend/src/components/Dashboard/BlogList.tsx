import React, { useEffect, useState } from 'react';
import { Blog } from '../../types';
import { fetchBlogs, deleteBlog } from '../../utils/api';
import './BlogList.css';

const BlogList: React.FC = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadBlogs = async () => {
            const fetchedBlogs = await fetchBlogs();
            setBlogs(fetchedBlogs);
            setLoading(false);
        };
        loadBlogs();
    }, []);

    const handleDelete = async (id: string) => {
        await deleteBlog(id);
        setBlogs(blogs.filter(blog => blog.id !== id));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="blog-list">
            <h2>Blog List</h2>
            {blogs.length === 0 ? (
                <p>No blogs available.</p>
            ) : (
                <ul>
                    {blogs.map(blog => (
                        <li key={blog.id} className="blog-item">
                            <h3>{blog.title}</h3>
                            <p>{blog.excerpt}</p>
                            <button onClick={() => handleDelete(blog.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BlogList;