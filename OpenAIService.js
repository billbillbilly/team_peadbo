import axios from 'axios';
import axiosRetry from 'axios-retry';
import { openAIPublicKey } from './Secrets'; // Import the OpenAI API key from a secrets file

// Set up retry logic for exponential backoff
axiosRetry(axios, {
  retries: 5, // Number of retries before giving up
  retryDelay: (retryCount) => {
    // Exponential backoff: 1s, 2s, 4s, 8s, etc.
    return Math.pow(2, retryCount) * 1000;
  },
  retryCondition: (error) => error.response && error.response.status === 429, // Retry on HTTP 429 (rate limit exceeded)
});

// OpenAI API configuration
const API_KEY = openAIPublicKey; // API key for OpenAI
const openAIUrl = 'https://api.openai.com/v1/chat/completions'; // OpenAI API endpoint

// Axios instance for OpenAI requests
const openAI = axios.create({
  baseURL: openAIUrl,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`, // Authorization header with the API key
  },
});

/**
 * Generates a professional email invitation template using OpenAI.
 * @returns {string} - The generated email content.
 * @throws {Error} - Throws an error if the request fails or rate limit is hit.
 */
export const generateText = async () => {
  try {
    const response = await openAI.post('', {
      model: 'gpt-4o-mini', // Using the gpt-4o-mini model
      messages: [
        {
          role: 'user',
          content: 'Generate a professional template for an email invitation to a Personal Advisory Board. This can include why you want this professional to join, what the agenda will be, etc. Keep the invitation brief and to the point.',
        },
      ],
      max_tokens: 500, // Maximum number of tokens in the response
      temperature: 0.7, // Controls creativity/variability in the response
    });

    return response.data.choices[0].message.content.trim(); // Return the generated text
  } catch (error) {
    if (error.response && error.response.status === 429) {
      console.error('Rate limit hit, retrying...');
    } else {
      console.error('Error generating text from OpenAI:', error.response ? error.response.data : error.message);
    }
    throw error;
  }
};

/**
 * Generates a response message based on user input using OpenAI.
 * By providing more details on the processes of the app, you can achieve a more accurate
 * response from the model that is more relevant to the user's needs.
 * @param {string} input - The user's input message.
 * @returns {string} - The generated response message.
 * @throws {Error} - Throws an error if the request fails or rate limit is hit.
 */
export const generateMessage = async (input) => {
  try {
    const response = await openAI.post('', {
      model: 'gpt-4o-mini', // Using the gpt-4o-mini model
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

          Always provide concise and app-specific responses. Additionally, try to address the prompt that is given: ${input}`,
        },
        {
          role: 'user',
          content: input, // User's input message
        },
      ],
      max_tokens: 500, // Maximum number of tokens in the response
      temperature: 0.7, // Controls creativity/variability in the response
    });

    return response.data.choices[0].message.content.trim(); // Return the generated message
  } catch (error) {
    if (error.response && error.response.status === 429) {
      console.error('Rate limit hit, retrying...');
    } else {
      console.error('Error generating text from OpenAI:', error.response ? error.response.data : error.message);
    }
    throw error;
  }
};

/**
 * Generates a professional email template in JSON format using OpenAI. Because response comes as a string,
 * it must be specified in request that response should be in strict JSON format.
 * This will allow it to be parsed so that the information can be extracted and used in the newsletter.
 * @returns {Object} - The generated email template with `title`, `subject`, and `body` fields.
 * @throws {Error} - Throws an error if the request fails, rate limit is hit, or the response is invalid JSON.
 */
export const generateTemplate = async () => {
  try {
    const response = await openAI.post('', {
      model: 'gpt-4o-mini', // Using the gpt-4o-mini model
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
      max_tokens: 500, // Maximum number of tokens in the response
      temperature: 0.7, // Controls creativity/variability in the response
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