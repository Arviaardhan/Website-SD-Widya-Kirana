// controllers/HomeController.js

import axios from "axios";
import { apiUrl, getImageGallery, getAllNews } from "../utils/Config";

export const fetchBeritaTerbaru = async () => {
    try {
        const response = await axios.get(`${apiUrl}${getAllNews}`, {
            headers: {
                "Accept": "application/json",
                "ngrok-skip-browser-warning": "true", // ← tambahkan ini
            },
        });

        // Urutkan berdasarkan created_at
        const sortedData = response.data.sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );

        return sortedData.slice(0, 4); // ambil 4 berita terbaru
    } catch (error) {
        console.error("Gagal mengambil data berita terbaru:", error);
        return [];
    }
};

export const fetchGaleri = async () => {
    try {
        const response = await axios.get(`${apiUrl}${getImageGallery}`, {
            headers: { "ngrok-skip-browser-warning": "true" },
        });

        console.log("Galeri Response:", response.data);

        // Return data instead of calling setGaleriImages
        return response.data;
    } catch (error) {
        console.error("Error fetching galeri:", error);
        return []; // Return empty array on error
    }
};


