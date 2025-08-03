import React from 'react';
import WeatherDashboard from './components/WeatherDashboard';
import './styles/tailwind.css';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">AI + IoT Powered Weather Dashboard</h1>
        <WeatherDashboard />
      </div>
    </div>
  );
};

export default App;