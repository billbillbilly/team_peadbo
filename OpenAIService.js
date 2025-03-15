import axios from 'axios';
import axiosRetry from 'axios-retry';
import { openAIPublicKey } from './Secrets';

// Set up retry logic for exponential backoff
axiosRetry(axios, {
  retries: 5,  // Number of retries before giving up
  retryDelay: (retryCount) => {
    // Exponential backoff: 1s, 2s, 4s, 8s, etc.
    return Math.pow(2, retryCount) * 1000;
  },
  retryCondition: (error) => error.response && error.response.status === 429,  // Retry on 429 status
});

const API_KEY = openAIPublicKey;
const openAIUrl = 'https://api.openai.com/v1/chat/completions';

const openAI = axios.create({
  baseURL: openAIUrl,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`,
  },
});

export const generateText = async () => {
  try {
    const response = await openAI.post('', {
        model: 'gpt-4o-mini',  // Using gpt-4o-mini model
        messages: [
          {
            role: 'user',
            content: 'Generate a professional template for an email invitation to a Personal Advisory Board. This can include why you want this professional to join, what the agenda will be, etc. Keep the invitation brief and to the point.',
          },
        ],
        max_tokens: 500,  // Adjust as needed
        temperature: 0.7,  // Adjust for creativity/variability (optional)
      });

    return response.data.choices[0].message.content.trim();
  } catch (error) {
    if (error.response && error.response.status === 429) {
      console.error('Rate limit hit, retrying...');
    } else {
      console.error('Error generating text from OpenAI:', error.response ? error.response.data : error.message);
    }
    throw error;
  }
};
