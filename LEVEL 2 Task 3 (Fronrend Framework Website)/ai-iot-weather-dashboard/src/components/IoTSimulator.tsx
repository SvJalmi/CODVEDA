import React, { useEffect, useState } from 'react';
import { simulateIoTData } from '../services/iotService';
import Loader from './common/Loader';

const IoTSimulator: React.FC = () => {
    const [sensorData, setSensorData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const data = await simulateIoTData();
            setSensorData(data);
            setLoading(false);
        };

        fetchData();
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="p-4 bg-white rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">IoT Sensor Data</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sensorData.map((sensor: any, index: number) => (
                    <div key={index} className="p-4 border rounded">
                        <h3 className="font-semibold">{sensor.name}</h3>
                        <p>Temperature: {sensor.temperature} °C</p>
                        <p>Humidity: {sensor.humidity} %</p>
                        <p>Pressure: {sensor.pressure} hPa</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IoTSimulator;