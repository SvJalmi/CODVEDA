const fetchWeatherData = async (location) => {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${location}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};

const formatTemperature = (tempC) => {
    return `${tempC}°C`;
};

const getWeatherIconUrl = (icon) => {
    return `https:${icon}`;
};

export { fetchWeatherData, formatTemperature, getWeatherIconUrl };