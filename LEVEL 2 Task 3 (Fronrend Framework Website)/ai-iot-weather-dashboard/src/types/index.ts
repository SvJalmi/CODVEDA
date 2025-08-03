export interface WeatherData {
    temperature: number;
    humidity: number;
    windSpeed: number;
    condition: string;
    timestamp: string;
}

export interface AIInsights {
    prediction: string;
    confidence: number;
}

export interface IoTDeviceData {
    deviceId: string;
    status: string;
    readings: {
        temperature: number;
        humidity: number;
        batteryLevel: number;
    };
}

export interface DashboardState {
    weatherData: WeatherData | null;
    aiInsights: AIInsights | null;
    iotDeviceData: IoTDeviceData[];
    loading: boolean;
    error: string | null;
}