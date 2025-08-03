import axios from 'axios';

const IOT_API_URL = 'https://api.example.com/iot'; // Replace with your actual IoT API endpoint

export const fetchIoTData = async () => {
    try {
        const response = await axios.get(`${IOT_API_URL}/data`);
        return response.data;
    } catch (error) {
        console.error('Error fetching IoT data:', error);
        throw error;
    }
};

export const simulateIoTDevice = async (deviceId, simulationData) => {
    try {
        const response = await axios.post(`${IOT_API_URL}/simulate`, {
            deviceId,
            data: simulationData,
        });
        return response.data;
    } catch (error) {
        console.error('Error simulating IoT device:', error);
        throw error;
    }
};