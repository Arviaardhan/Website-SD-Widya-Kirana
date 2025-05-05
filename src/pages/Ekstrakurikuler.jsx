import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { imageHome } from '../assets/images';
import Footer from "../components/Footer";
import { apiUrl, apiUrlImage, getAllExtracurricular } from "../utils/Config";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Ekstrakurikuler() {
    const [ekskulList, setEkskulList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchEkskul = async () => {
            AOS.init({
                duration: 1000,
                once: true
            });

            try {
                setIsLoading(true);
                const response = await axios.get(`${apiUrl}${getAllExtracurricular}`, {
                    headers: {
                        "Content-Type": "application/json",
                        "ngrok-skip-browser-warning": "true",
                    },
                });
                setEkskulList(response.data);
            } catch (error) {
                console.error("Gagal mengambil data ekstrakurikuler:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchEkskul();
    }, []);

    // Skeleton Loader for Ekstrakurikuler Item
    const SkeletonItem = () => (
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 animate-pulse">
            <div className="w-full md:w-[360px] lg:w-[450px] h-64 md:h-64 lg:h-72 bg-gray-300 rounded shadow-md"></div>
            <div className="flex-1 space-y-4">
                <div className="h-6 bg-gray-300 rounded w-2/3"></div>
                <div className="h-4 bg-gray-300 rounded w-full"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                <div className="h-4 bg-gray-300 rounded w-4/6"></div>
            </div>
        </div>
    );

    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <div className="relative w-full h-[200px]" data-aos="fade-in">
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
            <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-16" data-aos="fade-up">
                {isLoading
                    ? Array.from({ length: 3 }).map((_, index) => (
                        <SkeletonItem key={index} />
                    ))
                    : ekskulList.map((item, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-start md:items-start gap-6 md:gap-10">
                            <img
                                src={`${item.image}`}
                                alt={item.title}
                                className="w-full md:w-[360px] lg:w-[450px] h-64 md:h-64 lg:h-72 object-cover rounded shadow-md"
                            />
                            <div>
                                <h3 className="text-4xl font-bold text-indigo-900">{item.title}</h3>
                                <p className="text-gray-700 mt-2 md:mt-6 text-justify font-normal tracking-wide">{item.description}</p>
                            </div>
                        </div>
                    ))}
            </div>

            <Footer />
        </>
    );
}

export default Ekstrakurikuler;
