// utils/axiosInstance.js
import axios from 'axios';
import { apiUrl } from "../utils/Config";

export const AxiosInstance = axios.create({
    baseURL: apiUrl,
    headers: {
        "x-api-key": import.meta.env.VITE_API_KEY,
        "ngrok-skip-browser-warning": "true",
        "Accept": "application/json"
    }
});
