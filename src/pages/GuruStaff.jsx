import React, { useEffect, useState } from "react";
import Navbar from '../components/Navbar';
import { imageHome } from '../assets/images';
import { AxiosInstance } from "../common/AxiosInstance";
import Footer from "../components/Footer";
import { getAllTeacherStaff } from '../utils/Config';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet";

function GuruStaff() {
    const [teachers, setTeachers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });

        const fetchTeachers = async () => {
            try {
                setIsLoading(true);
                const response = await AxiosInstance.get(`${getAllTeacherStaff}`);
                setTeachers(response.data);
            } catch (error) {
                console.error("Error fetching teachers:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTeachers();
    }, []);

    const SkeletonCard = () => (
        <div className="animate-pulse">
            <div className="h-60 w-full bg-gray-300 rounded-xl mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto mb-2"></div>
            <div className="h-3 bg-gray-300 rounded w-1/2 mx-auto"></div>
        </div>
    );

    return (
        <>

            <Helmet>
                <meta name="google-site-verification" content="6NySi0eoc_-8ZIzOhmXTUA2e3VTapByqeyCmlLp1V84" />
                <title>Guru & Staff | SD Widya Kirana</title>
                <meta name="description" content="Kenali para guru dan staf profesional di SD Widya Kirana yang berdedikasi dalam memberikan pendidikan berkualitas. Temukan informasi tentang pengalaman dan keahlian mereka di sini." />
                <meta name="keywords" content="Guru SD Widya Kirana, Staf SD Widya Kirana, Pendidikan, Sekolah Dasar Kudus, Tenaga Pendidik, Pengajaran Berkualitas, SD Widya Kirana Kudus" />
            </Helmet>

            <Navbar />

            {/* Hero Section */}
            <div className="relative w-full h-[200px]" data-aos="fade-in">
                <img
                    src={imageHome}
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                        HALAMAN GURU & STAFF
                    </h1>
                </div>
            </div>

            {/* Grid Section */}
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8" data-aos="fade-up">
                {isLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i}>
                                <SkeletonCard />
                            </div>
                        ))}
                    </div>
                ) : (() => {
                    const fullRows = Math.floor(teachers.length / 6) * 6; // 3 (desktop), 2 (iPad), 1 (mobile)
                    const isDesktop = window.innerWidth >= 1024;
                    const itemsPerRow = isDesktop ? 3 : window.innerWidth >= 768 ? 2 : 1;
                    const fullItems = Math.floor(teachers.length / itemsPerRow) * itemsPerRow;
                    const mainItems = teachers.slice(0, fullItems);
                    const remainingItems = teachers.slice(fullItems);

                    return (
                        <>
                            {/* Full Rows */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                {mainItems.map((teacher, index) => (
                                    <div key={index} className="text-center">
                                        <div className="h-90 w-full overflow-hidden rounded-xl shadow-lg mb-4">
                                            <img
                                                loading="lazy"
                                                src={teacher.image}
                                                alt={teacher.name}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        <h3 className="text-xl font-bold text-indigo-900">
                                            {teacher.name}
                                        </h3>
                                        <p className="text-gray-600 mt-5">{teacher.description}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Remaining Items - Flex Centered */}
                            {remainingItems.length > 0 && (
                                <div className="flex justify-center gap-10 mt-10 flex-wrap">
                                    {remainingItems.map((teacher, index) => (
                                        <div key={index} className="w-full md:w-[48%] lg:w-[30%] text-center">
                                            <div className="h-90 w-full overflow-hidden rounded-xl shadow-lg mb-4">
                                                <img
                                                    loading="lazy"
                                                    src={teacher.image}
                                                    alt={teacher.name}
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                            <h3 className="text-xl font-bold text-indigo-900">
                                                {teacher.name}
                                            </h3>
                                            <p className="text-gray-600 mt-5">{teacher.description}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    );
                })()}
            </div>

            <Footer />
        </>
    );
}

export default GuruStaff;
