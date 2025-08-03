import React, { useEffect, useState } from 'react';
import { fetchWeatherData } from '../hooks/useWeatherData';
import AIIntegration from './AIIntegration';
import IoTSimulator from './IoTSimulator';
import Loader from './common/Loader';

const WeatherDashboard: React.FC = () => {
    const [weatherData, setWeatherData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getWeatherData = async () => {
            try {
                const data = await fetchWeatherData();
                setWeatherData(data);
            } catch (err) {
                setError('Failed to fetch weather data');
            } finally {
                setLoading(false);
            }
        };

        getWeatherData();
    }, []);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Weather Dashboard</h1>
            <div className="mt-4">
                <h2 className="text-xl">Current Weather</h2>
                <pre>{JSON.stringify(weatherData, null, 2)}</pre>
            </div>
            <AIIntegration weatherData={weatherData} />
            <IoTSimulator />
        </div>
    );
};

export default WeatherDashboard;