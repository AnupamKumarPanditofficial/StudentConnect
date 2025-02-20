import axios from "axios";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateText";

/**
 * Get AI-based career guidance
 * @param {string} query - User's question or career interest
 */
export const getCareerGuidance = async (query: string) => {
  try {
    const response = await axios.post(
      `${API_URL}?key=${API_KEY}`,
      {
        prompt: {
          text: `Suggest career paths for: ${query}`,
        },
        temperature: 0.7,
      }
    );

    return response.data.candidates[0].output;
  } catch (error) {
    console.error("Error fetching career guidance:", error);
    throw error;
  }
};
