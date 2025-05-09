// utils/axiosInstance.js
import axios from 'axios';
import { apiUrl } from "../utils/Config";

export const AxiosInstance = axios.create({
    baseURL: apiUrl,
    headers: {
        "x-api-key": "nKJMHFm29tOd7t1360PoL3IdDMEqq33oT4Rh0PJ66TMuGnHJcSRHO5gMRTJBiSDc",
        "ngrok-skip-browser-warning": "true",
        "Accept": "application/json"
    }
});
