// controllers/HomeController.js

import { getImageGallery, getAllNews } from "../utils/Config";
import { AxiosInstance } from "../common/AxiosInstance";

export const fetchBeritaTerbaru = async () => {
    try {
        const response = await AxiosInstance.get(getAllNews);

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
        const response = await AxiosInstance.get(getImageGallery);
        return response.data;
    } catch (error) {
        console.error("Error fetching galeri:", error);
        return []; // Return empty array on error
    }
};


