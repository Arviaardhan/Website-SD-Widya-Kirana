import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { imageHome } from '../assets/images';
import Footer from "../components/Footer";
import { apiUrl, apiUrlImage, getAllExtracurricular } from "../utils/Config"; 

function Ekstrakurikuler() {
    const [ekskulList, setEkskulList] = useState([]);

    useEffect(() => {
        const fetchEkskul = async () => {
            try {
                const response = await axios.get(`${apiUrl}${getAllExtracurricular}`, {
                    headers: {
                        "Content-Type": "application/json",
                        "ngrok-skip-browser-warning": "true",
                    },
                });
                setEkskulList(response.data); 
            } catch (error) {
                console.error("Gagal mengambil data ekstrakurikuler:", error);
            }
        };

        fetchEkskul();
    }, []);

    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <div className="relative w-full h-[200px]">
                <img
                    src={imageHome}
                    alt="Ekstrakurikuler"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                        EKSTRAKURIKULER
                    </h1>
                </div>
            </div>

            {/* List Section */}
            <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-16">
                {ekskulList.map((item, index) => (
                    <div key={index} className="flex flex-col md:flex-row items-start md:items-start gap-6 md:gap-10">
                        <img
                            src={`${apiUrlImage}/storage/${item.image}`}
                            alt={item.title}
                            className="w-full md:w-[360px] lg:w-[450px] h-64 md:h-64 lg:h-72 object-cover rounded shadow-md"
                        />
                        <div>
                            <h3 className="text-4xl font-bold text-indigo-900">{item.title}</h3>
                            <p className="text-gray-700 mt-2 md:mt-6 lg:mt-6 text-justify font-normal tracking-wide">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </>
    );
}

export default Ekstrakurikuler;
