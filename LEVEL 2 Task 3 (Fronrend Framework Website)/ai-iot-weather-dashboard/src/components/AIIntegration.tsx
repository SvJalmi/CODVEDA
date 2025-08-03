import React, { useEffect, useState } from 'react';
import { fetchAIInsights } from '../services/aiService';
import Loader from './common/Loader';

const AIIntegration: React.FC = () => {
    const [insights, setInsights] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getInsights = async () => {
            try {
                const data = await fetchAIInsights();
                setInsights(data);
            } catch (err) {
                setError('Failed to fetch AI insights');
            } finally {
                setLoading(false);
            }
        };

        getInsights();
    }, []);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return (
        <div className="p-4 bg-white rounded shadow-md">
            <h2 className="text-xl font-bold">AI Weather Insights</h2>
            <p>{insights}</p>
        </div>
    );
};

export default AIIntegration;