import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentList from '../components/Comments/CommentList';
import CommentInput from '../components/Comments/CommentInput';
import { fetchBlog, fetchComments } from '../utils/api';
import './Blog.css';

const Blog = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const getBlog = async () => {
            const blogData = await fetchBlog(id);
            setBlog(blogData);
        };

        const getComments = async () => {
            const commentsData = await fetchComments(id);
            setComments(commentsData);
        };

        getBlog();
        getComments();
    }, [id]);

    if (!blog) {
        return <div>Loading...</div>;
    }

    return (
        <div className="blog-container">
            <h1 className="blog-title">{blog.title}</h1>
            <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
            <div className="blog-content">{blog.content}</div>
            <CommentInput blogId={id} setComments={setComments} />
            <CommentList comments={comments} />
        </div>
    );
};

export default Blog;