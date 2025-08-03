import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AnalyticsPanel = () => {
    const [views, setViews] = useState(0);
    const [likes, setLikes] = useState(0);

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                const response = await axios.get('/api/analytics');
                setViews(response.data.views);
                setLikes(response.data.likes);
            } catch (error) {
                console.error('Error fetching analytics data:', error);
            }
        };

        fetchAnalytics();
    }, []);

    return (
        <div className="analytics-panel">
            <h2>Analytics Dashboard</h2>
            <div className="analytics-stats">
                <div className="stat">
                    <h3>Views</h3>
                    <p>{views}</p>
                </div>
                <div className="stat">
                    <h3>Likes</h3>
                    <p>{likes}</p>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsPanel;