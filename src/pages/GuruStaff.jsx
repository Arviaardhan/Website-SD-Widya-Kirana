import React, { useEffect, useState } from "react";
import Navbar from '../components/Navbar';
import { imageHome } from '../assets/images';
import axios from "axios";
import Footer from "../components/Footer";
import { apiUrl, apiUrlImage, getAllTeacherStaff } from '../utils/Config';
import { FaSpinner } from "react-icons/fa";

function GuruStaff() {
    const [teachers, setTeachers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTeachers = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(`${apiUrl}${getAllTeacherStaff}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        "ngrok-skip-browser-warning": "true",
                    },
                });
                setTeachers(response.data); // sesuaikan dengan struktur data
            } catch (error) {
                console.error("Error fetching teachers:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTeachers();
    }, []);

    // Skeleton Loader Component
    const SkeletonCard = () => (
        <div className="animate-pulse">
            <div className="h-60 w-full bg-gray-300 rounded-xl mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto mb-2"></div>
            <div className="h-3 bg-gray-300 rounded w-1/2 mx-auto"></div>
        </div>
    );

    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <div className="relative w-full h-[200px]">
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
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {isLoading
                        ? Array.from({ length: 6 }).map((_, i) => (
                            <div key={i}>
                                <SkeletonCard />
                            </div>
                        ))
                        : teachers.map((teacher, index) => (
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
            </div>

            <Footer />
        </>
    );
}

export default GuruStaff;
