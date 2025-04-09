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

export const generateMessage = async (input) => {
  try {
    const response = await openAI.post('', {
      model: 'gpt-4o-mini', // Using gpt-4o-mini model
      messages: [
        {
          role: 'system',
          content: `You are a helpful assistant for the Peadbo mobile app.
          Your purpose is to help users navigate the app, explain its features, and assist with tasks. 
          The app allows users to:
          - Create and manage Personal Advisory Boards.
          - Invite advisors to their boards.
          - Schedule meetings and manage availability.
          - Send notifications and invitations.
          - View and edit board details.

          Always provide concise and app-specific responses. Additionally, try to address the promp that is given: ${input}`,
        },
        {
          role: 'user',
          content: input, // User's input message
        },
      ],
      max_tokens: 500, // Adjust as needed
      temperature: 0.7, // Adjust for creativity/variability (optional)
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

export const generateTemplate = async () => {
  try {
    const response = await openAI.post('', {
      model: 'gpt-4o-mini', // Using gpt-4o-mini model
      messages: [
        {
          role: 'user',
          content: `Generate a professional email template in strict JSON format with the following fields:
          - title: A brief title for the email.
          - subject: The subject line of the email.
          - body: The main content of the email.

          The email should update advisors on the user's progress -- each user is writing the update for different reasons, so keep the response open to be used in different ways (professional, personal, etc.). Keep the message brief and to the point, no longer than half a paragraph.

          Ensure the response is valid JSON and does not include any additional text or formatting outside of the JSON object.`,
        },
      ],
      max_tokens: 500, // Adjust as needed
      temperature: 0.7, // Adjust for creativity/variability (optional)
    });

    // Parse the AI response
    const aiResponse = response.data.choices[0].message.content.trim();

    // Validate and parse the JSON response
    let parsedResponse;
    try {
      parsedResponse = JSON.parse(aiResponse);
    } catch (parseError) {
      console.error('Invalid JSON response from OpenAI:', aiResponse);
      throw new Error('Failed to parse AI response. Ensure the AI response is valid JSON.');
    }

    // Extract fields into variables
    const { title, subject, body } = parsedResponse;

    // Return the structured data
    return { title, subject, body };
  } catch (error) {
    if (error.response && error.response.status === 429) {
      console.error('Rate limit hit, retrying...');
    } else {
      console.error('Error generating template from OpenAI:', error.response ? error.response.data : error.message);
    }
    throw error;
  }
};
