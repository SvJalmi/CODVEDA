import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ImageUpload from '../Cloudinary/ImageUpload';
import SEOPanel from '../SEO/SEOPanel';
import { createBlog, editBlog, getBlogById } from '../../utils/api';
import './BlogEditor.css';

const BlogEditor = ({ match }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');
    const [slug, setSlug] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const history = useHistory();
    const blogId = match.params.id;

    useEffect(() => {
        if (blogId) {
            setIsEditing(true);
            getBlogById(blogId).then(blog => {
                setTitle(blog.title);
                setContent(blog.content);
                setImage(blog.image);
                setSlug(blog.slug);
            });
        }
    }, [blogId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const blogData = { title, content, image, slug };
        if (isEditing) {
            await editBlog(blogId, blogData);
        } else {
            await createBlog(blogData);
        }
        history.push('/dashboard');
    };

    return (
        <div className="blog-editor">
            <h2>{isEditing ? 'Edit Blog' : 'Create Blog'}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <ImageUpload setImage={setImage} existingImage={image} />
                <SEOPanel slug={slug} setSlug={setSlug} />
                <button type="submit">{isEditing ? 'Update Blog' : 'Create Blog'}</button>
            </form>
        </div>
    );
};

export default BlogEditor;