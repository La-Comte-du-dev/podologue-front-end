import axios from "axios";

// Envoi/récupère les cookie à chaque requête
// axios.defaults.withCredentials = true;

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

/**
 * Login
 */
export const fetchLogin = async (username: string, password: string) => {
  await axios.post(
    `${API_URL}/api/auth/signin`,
    { username, password },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    }
  );
};
