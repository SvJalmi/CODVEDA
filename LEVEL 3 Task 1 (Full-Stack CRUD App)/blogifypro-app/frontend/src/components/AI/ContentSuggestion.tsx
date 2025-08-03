import React, { useState } from 'react';
import axios from 'axios';

const ContentSuggestion: React.FC = () => {
    const [prompt, setPrompt] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrompt(e.target.value);
    };

    const fetchSuggestions = async () => {
        setLoading(true);
        try {
            const response = await axios.post('/api/ai/suggest', { prompt });
            setSuggestions(response.data.suggestions);
        } catch (error) {
            console.error('Error fetching suggestions:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="content-suggestion">
            <h2>AI Content Suggestions</h2>
            <input
                type="text"
                value={prompt}
                onChange={handleInputChange}
                placeholder="Enter your topic or idea"
            />
            <button onClick={fetchSuggestions} disabled={loading}>
                {loading ? 'Loading...' : 'Get Suggestions'}
            </button>
            <div className="suggestions">
                {suggestions.map((suggestion, index) => (
                    <div key={index} className="suggestion-item">
                        {suggestion}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContentSuggestion;