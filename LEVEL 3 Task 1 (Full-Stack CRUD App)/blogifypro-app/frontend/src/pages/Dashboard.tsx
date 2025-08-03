import React from 'react';
import BlogEditor from '../components/Dashboard/BlogEditor';
import BlogList from '../components/Dashboard/BlogList';
import AnalyticsPanel from '../components/Dashboard/AnalyticsPanel';
import SEOPanel from '../components/SEO/SEOPanel';
import './Dashboard.css';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Dashboard</h1>
            <div className="dashboard-sections">
                <div className="blog-section">
                    <h2>Create/Edit Blog</h2>
                    <BlogEditor />
                </div>
                <div className="blog-list-section">
                    <h2>Blog List</h2>
                    <BlogList />
                </div>
                <div className="seo-section">
                    <h2>SEO Management</h2>
                    <SEOPanel />
                </div>
                <div className="analytics-section">
                    <h2>Analytics</h2>
                    <AnalyticsPanel />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;