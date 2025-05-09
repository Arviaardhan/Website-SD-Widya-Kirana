import React, { useEffect, useState } from "react";
import { AxiosInstance } from "../common/AxiosInstance";
import Navbar from "../components/Navbar";
import { imageHome } from '../assets/images';
import Footer from "../components/Footer";
import { getAllExtracurricular } from "../utils/Config";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet";

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
                const response = await AxiosInstance.get(`${getAllExtracurricular}`);
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

            <Helmet>
                <meta name="google-site-verification" content="6NySi0eoc_-8ZIzOhmXTUA2e3VTapByqeyCmlLp1V84" />
                <title>Ekstrakurikuler | SD Widya Kirana</title>
                <meta name="description" content="Temukan berbagai kegiatan ekstrakurikuler yang mendukung pengembangan diri siswa di SD Widya Kirana. Program kami dirancang untuk mengasah bakat dan minat siswa di luar kegiatan akademik." />
                <meta name="keywords" content="Ekstrakurikuler SD Widya Kirana, Kegiatan Ekstrakurikuler, Sekolah Dasar Kudus, Pengembangan Bakat, Aktivitas Siswa, SD Widya Kirana Kudus, Program Ekstrakurikuler" />
            </Helmet>

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
                        <div
                            key={index}
                            className="flex flex-col md:flex-row items-start gap-6 md:gap-10 bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
                            data-aos="fade-up"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full md:w-[360px] lg:w-[450px] h-64 md:h-64 lg:h-72 object-cover rounded-xl shadow-sm"
                            />
                            <div className="flex-1">
                                <h3 className="text-3xl font-bold text-indigo-900 mb-4">{item.title}</h3>
                                <p className="text-gray-700 text-justify tracking-wide leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
            </div>

            <Footer />
        </>
    );
}

export default Ekstrakurikuler;
