import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Analytics.css';

const Analytics = () => {
    const [views, setViews] = useState(0);
    const [likes, setLikes] = useState(0);

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                const viewsResponse = await axios.get('/api/analytics/views');
                const likesResponse = await axios.get('/api/analytics/likes');
                setViews(viewsResponse.data.views);
                setLikes(likesResponse.data.likes);
            } catch (error) {
                console.error('Error fetching analytics data:', error);
            }
        };

        fetchAnalytics();
    }, []);

    return (
        <div className="analytics-container">
            <h1>Analytics Dashboard</h1>
            <div className="analytics-card">
                <h2>Total Views</h2>
                <p>{views}</p>
            </div>
            <div className="analytics-card">
                <h2>Total Likes</h2>
                <p>{likes}</p>
            </div>
        </div>
    );
};

export default Analytics;