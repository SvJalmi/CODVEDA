import axios from 'axios';

const AI_API_URL = 'https://api.example.com/weather-predictions'; // Replace with your actual AI API URL

export const fetchWeatherPredictions = async (location) => {
    try {
        const response = await axios.get(`${AI_API_URL}?location=${location}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching weather predictions:', error);
        throw error;
    }
};

export const getAIInsights = async (data) => {
    try {
        const response = await axios.post(`${AI_API_URL}/insights`, data);
        return response.data;
    } catch (error) {
        console.error('Error fetching AI insights:', error);
        throw error;
    }
};