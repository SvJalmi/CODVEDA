import React, { useEffect, useState } from 'react';
import BlogList from '../components/Dashboard/BlogList';
import { fetchBlogs } from '../utils/api';

const Home: React.FC = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const getBlogs = async () => {
            const fetchedBlogs = await fetchBlogs();
            setBlogs(fetchedBlogs);
        };

        getBlogs();
    }, []);

    return (
        <div className="home-container">
            <h1>Welcome to BlogifyPro</h1>
            <p>Your one-stop solution for blogging!</p>
            <BlogList blogs={blogs} />
        </div>
    );
};

export default Home;