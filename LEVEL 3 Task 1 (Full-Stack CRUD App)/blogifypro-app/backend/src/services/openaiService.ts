import axios from 'axios';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';

export const suggestContent = async (prompt: string): Promise<string> => {
    try {
        const response = await axios.post(OPENAI_API_URL, {
            prompt: prompt,
            max_tokens: 150,
            temperature: 0.7,
        }, {
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            },
        });

        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error suggesting content:', error);
        throw new Error('Failed to fetch content suggestion from OpenAI');
    }
};