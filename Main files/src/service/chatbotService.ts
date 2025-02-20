import axios from "axios";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateText";

/**
 * Fetch chatbot response from Gemini API
 * @param {string} userMessage - The message input from the user
 * @returns {Promise<string>} - The chatbot's response
 */
export const getChatbotResponse = async (userMessage: string): Promise<string> => {
  try {
    const response = await axios.post(
      `${API_URL}?key=${API_KEY}`,
      {
        prompt: {
          text: userMessage,
        },
        temperature: 0.7, // Adjust response creativity (0 = strict, 1 = very creative)
      }
    );

    return response.data.candidates?.[0]?.output || "Sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Error fetching chatbot response:", error);
    return "Oops! Something went wrong. Please try again later.";
  }
};
